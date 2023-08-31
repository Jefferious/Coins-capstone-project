const db = require('../database')

module.exports = {
    addCoin: (req, res) => {
        const {name, picture, price, description} = req.body
        console.log(req.body)
        db.query(`
            INSERT INTO coins (name, picture, price, description)
            VALUES (
                '${name}',
                '${picture}',
                '${price}',
                '${description}'
            )
            RETURNING *;
        `)
        .then((dbRes) => {
            res.status(200).send((dbRes[0]))
        })
    },
    getCoins: (req, res) => {
        db.query(`
            SELECT * FROM coins
            ORDER BY price ASC
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    },
    deleteCoin: (req, res) => {
        let {id} = req.params
        db.query(`
        DELETE FROM coins WHERE id = ${id};
        SELECT * FROM coins;
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
    }
}