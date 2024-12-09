const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('This is my NodeJs app for Cicd demo!')
})

app.listen(port, () => {
    console.log('Application is listening at http://localhost:${port}')
})
