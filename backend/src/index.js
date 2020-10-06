const express = require('express')
const app = express()
const http = require("http");
const server = http.Server(app);

app.get('/', (req, res) => {
    res.send('Hello! :)')
})

module.exports = server;