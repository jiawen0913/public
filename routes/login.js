const express = require('express');
const router = express.Router()

router.get('/', function (req, res) {
    const data = {
        name: 'Mr.Wen',
        imgUrl: '', 
    }
    res.send(data)
})

module.exports = router
