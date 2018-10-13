const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('ideas root')
})

router.get('/add', (req, res) => {
    res.send('ideas add')
})

router.get('/', (req, res) => {
    res.send('post ideas root')
})

module.exports = router