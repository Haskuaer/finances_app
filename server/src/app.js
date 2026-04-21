import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API`s working')
})

app.get('/api/user', (req, res) => {
    console.log('Username request')
    res.json({
        name: "Haskuaer"
    })
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server działa na porcie ${PORT}`)
})