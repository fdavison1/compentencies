module.exports = {
    getAllBooks: (req, res) => {
        const db = req.app.get('db')
        db.get_all_books().then(result => {
            res.status(200).send(result)
        })
    },
    getBooks: (req, res) => {
        const db = req.app.get('db')
        // console.log(req.body[0])
        db.get_books(req.body[0]).then(result => {
            res.status(200).send(result)
        })
    }
}