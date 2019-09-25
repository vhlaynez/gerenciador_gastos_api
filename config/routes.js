module.exports = app => {
    app.route('/gastos')
        .get(app.api.gastos.get)
        .put(app.api.gastos.save)

    app.route('/gastos/:id')
        .get(app.api.gastos.getById)
        .put(app.api.gastos.save)
        .delete(app.api.gastos.remove)

    app.route('/home')
        .get(app.api.gastos.home)
}