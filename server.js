const express = require('express')
const path = require('path')
const Rollbar = require('rollbar')

let rollbar = new Rollbar({
    accessToken: 'bb5265b4d4284924bda2a7f89fa89f11',
    captureUncaught: true,
    captureUnhandledRejections: true
})

const app = express()

const port = process.env.PORT || 4545

app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname, '/public/index.html'))
    rollbar.info('html file served successfully')
})

app.listen(port, () => console.log(`Take us to warp ${port}`))