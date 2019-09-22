module.exports = app => {
    const  { existsOrError, notExistsOrError } = app.api.validation

    const save = (req, res) => {
        const product = {...req.body}
        if(req.params.id) product.id = req.params.id

        try{
            existsOrError(product.name,'Nome não informado')
            existsOrError(product.marca,'Marca não informado')
            existsOrError(product.categoryId,'Categoria não informada')
            existsOrError(product.userId,'Autor não informado')
        } catch(msg){
            res.status(400).send(msg)
        }

        if(product.id){
            app.db('products')
                .update(product)
                .where({id: product.id})
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else{
            app.db('products')
                .insert(product)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const remove = async(req,res) => {
        try {
            const rowsDeleted = await app.db('products')
                .where({id: req.params.id}).del()
            
            try{
                existsOrError(rowsDeleted, 'Produto não encontrado')
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
        const page = req.query.page || 1

        const result = await app.db('gastos').count('id_gasto').first()
        const count = result['count(`id_gasto`)']

        app.db('gastos')
            .select('id_gasto','lugar','valor')
            .limit(limit).offset(page * limit - limit)
            .then(products => res.json({data: products,count,limit}))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('products')
            .where({id: req.params.id})
            .first()
            .then(product => res.json(product))
            .catch(err => res.status(500).send(err))
    }

    return {save,remove,get,getById}
}