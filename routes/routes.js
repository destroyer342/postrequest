const express = require('express')
const router = express.Router()
const postRequest = require('../controllers/postrequest.js')

router.get('/chan',(req,res) => {

    res.render('index', {var:'chan'})
    
})

router.get('/daddy',(req,res) => {

    res.render('index', {var:'daddy'})
    
})

router.get('/trypost',postRequest.postRequest)

module.exports = router