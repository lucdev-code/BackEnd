import express from 'express'

const app = express()
const port = 1020

app.get('/', (req, res) => {
    return res.json({
        message: 'Hello world'
    })
} )

app.listen(port, () => {
    console.log('Listening on port:', port)
})