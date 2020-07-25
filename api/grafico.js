module.exports = app => {
    const  { existsOrError, notExistsOrError, api_key } = app.api.validation

    const get = (req, res) => {
        try{
            api_key(req.get('api_key'),'Unauthorized')
        } catch(msg){
            return res.status(403).send(msg)
        }
        
        app.db('gastos')
        .column('categoria','valor')
            .select('categoria')
            .sum('valor as valor')
            .groupBy('categoria')
            .then(gasto => res.json(gasto))
            .catch(err => res.status(500).send(err))
    }

    return {get}
}