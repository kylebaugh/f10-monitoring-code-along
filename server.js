const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
    accessToken: '',
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express()

const port = process.env.PORT || 4545

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(port, () => console.log(`Take us to warp ${port}`))