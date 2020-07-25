module.exports = app => {
    const  { existsOrError, notExistsOrError, api_key } = app.api.validation

    const save = (req, res) => {
        /* console.log(req.body) */
        const gasto = {...req.body}
        if(req.params.id) gasto.id_gasto = req.params.id
        try{
            existsOrError(gasto.categoria,'Categoria não informada')
            existsOrError(gasto.lugar,'Local não informado')
            existsOrError(gasto.valor,'Valor não informado')
            existsOrError(gasto.data_gasto,'Data não informada')
        } catch(msg){
            return res.status(400).send(msg)
        }

        try {
            api_key(req.get('api_key'),'Unauthorized')
        } catch(msg){
            return res.status(403).send(msg)
        }

        if(gasto.id_gasto){
            
            app.db('gastos')
                .update(gasto)
                .where({id_gasto: gasto.id_gasto})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else{
            app.db('gastos')
                .insert(gasto)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async(req,res) => {
        try{
            api_key(req.get('api_key'),'Unauthorized')
        } catch(msg){
            return res.status(403).send(msg)
        }
        try {
            const rowsDeleted = await app.db('gastos')
                .where({id_gasto: req.params.id}).del()
            
            try{
                existsOrError(rowsDeleted, 'Gasto não encontrado')
            } catch(msg){
                return res.status(400).send(msg)
            }
        
            res.status(204).send()
        } catch(msg){
            res.status(500).send(msg)
        }
    }

    const limit = 10 // usado para paginação

    const get = async(req, res) => {
        
        try{
            api_key(req.get('api_key'),'Unauthorized')
        } catch(msg){
            return res.status(403).send(msg)
        }
        const page = req.query.page || 1

        const result = await app.db('gastos').count('id_gasto').first()
        const count = result['count(`id_gasto`)']

        app.db('gastos')
            .select('id_gasto','lugar','valor','data_gasto','categoria')
            .orderBy('data_gasto','desc')
            .limit(limit).offset(page * limit - limit)
            .then(gastos => res.json({data: gastos,count,limit}))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        try{
            api_key(req.get('api_key'),'Unauthorized')
        } catch(msg){
            return res.status(403).send(msg)
        }

        app.db('gastos')
            .where({id_gasto: req.params.id})
            .first()
            .then(gasto => res.json(gasto))
            .catch(err => res.status(500).send(err))
    }

    const home = (req,res) =>{
        
        try{
            api_key(req.get('api_key'),'Unauthorized')
        } catch(msg){
            return res.status(403).send(msg)
        }

        app.db('gastos')
        .select('id_gasto','lugar','valor','categoria')
        .orderBy('id_gasto','desc')
        .limit(3)
        .then(gasto => res.json(gasto))
        .catch(err => res.status(500).send(err))
    }

    return {save,remove,get,getById, home}
}