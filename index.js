const express = require('express')

const server = express()


server.get('/hello', (req, res) => {
    console.log('hello')
    res.json('hello, there')
})

const port = process.env.PORT || 9000

server.listen(port, () => {
   console.log(`Listening on port ${port}`) 
})