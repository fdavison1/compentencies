module.exports = {
    getAllBooks: (req, res) => {
        const db = req.app.get('db')
        db.get_all_books().then(result => {
            res.status(200).send(result)
        })
    },
    getBooks: (req, res) => {
        
    }
}