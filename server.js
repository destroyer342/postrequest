const express = require('express')
const app = express()
const router = require('./routes/routes.js')





app.set('view engine', 'ejs')
app.get('/',(req,res) => {

    res.render('index', {var:'rance'})
    
})

app.use('/',router)
app.listen((process.env.PORT || 8080))


