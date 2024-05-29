
const express = require('express');
const cors = require('cors');
const catRouter = require('./cat/cat.route.js');
require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Welcome To Tyba API!')
})

app.use('/api', catRouter)

const port = process.env.PORT || 3000
app.listen(
    port,
    () => console.log(`Server running on http://localhost:${port}`)
)