const express = require('express')
const app = express()

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('index')
})

app.get('/notes', (req, res) => {
    res.render('notes')
})


app.listen(3000)

