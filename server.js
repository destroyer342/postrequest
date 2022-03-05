const express = require('express')
const app = express()
const router = require('./routes/routes.js')
const apiURL = "https://api.hrworkz.com/v3/messenger/";


PORT = 8666

app.set('view engine', 'ejs')
app.get('/',(req,res) => {

    res.render('index', {var:'rance'})
    
})

app.use('/',router)
app.listen(PORT)


