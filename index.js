import express from 'express'
import cors from 'cors'
import catRouter from './cat/cat.route.js'
import dotenv from 'dotenv/config'
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