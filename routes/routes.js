const express = require('express')
const router = express.Router()
const postRequest = require('../controllers/postrequest.js')
const fromthis = require('../controllers/fromthis.js')

router.get('/chan',(req,res) => {

    res.render('index', {var:'chan'})
    
})

router.get('/daddy',(req,res) => {

    res.render('index', {var:'daddy'})
    
})



router.get('/fromthis',fromthis.fromthis)


router.get('/trypost',postRequest.postRequest)

module.exports = router