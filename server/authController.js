module.exports = {
    adminOnly: (req, res, next) => {
        if (req.body[0]){
            next()
        }
        return
    },
    getTreasure: (req, res) => {
        res.status(200).send('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6IGoQbBGU_NTsUMruUNfgzZKBLbyaURVoA-uM3T9m5lPYWP5-Hg&s')
    }
}