const express = require('express')
const cors = require('cors')
const db = require('./database')
const seed = require('./seed')
const {addCoin, getCoins, deleteCoin} = require('./controllers/coins')

const app = express()
app.use(express.json())
app.use(cors())

app.post('/api/seed', seed)
app.post('/api/addCoin', addCoin)
app.get('/api/getCoins', getCoins)
app.delete('/api/deleteCoin/:id', deleteCoin)

db.sync()

app.listen(4000, () => console.log('Running on port 4000'))