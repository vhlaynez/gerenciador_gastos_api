module.exports = app => {
    app.route('/gastos')
         .get(app.api.gastos.get)

}