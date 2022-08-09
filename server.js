const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use(express.static("public"))


app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render('index')
})

 app.get("/notes", (req, res) => {
     res.render('notes')
 })

  app.post("/notes", (req, res) => {    
      console.log(req.body)
 });

app.listen(3000)

