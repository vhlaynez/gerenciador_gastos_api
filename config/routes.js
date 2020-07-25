module.exports = app => {
    app.route('/gastos')
        .get(app.api.gastos.get)
        .post(app.api.gastos.save)

    app.route('/gastos/:id')
        .get(app.api.gastos.getById)
        .put(app.api.gastos.save)
        .delete(app.api.gastos.remove)

    app.route('/home')
        .get(app.api.gastos.home)

    app.route('/grafico')
        .get(app.api.grafico.get)
}