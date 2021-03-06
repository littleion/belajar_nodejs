const express = require('express')

const router = express.Router()

router.get('login', (req, res) => {
    res.send(`login page`)
})

router.get('/register', (req, res) => {
    res.send('register page')
})

router.post('/login', (req, res, next) => {
    res.send('post login page')
})

router.post('/register', (req, res) => {
    res.send('post register page')
})

router.get('/logout', (req, res) => {
    res.send('logout page')
})

module.exports = router