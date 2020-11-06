var express = require('express')
var router = express.Router()

//Routing
router.get('/', (req, res) => {
  res.render('index.ejs')
})

router.get('/about', (req, res) => {
  res.render('about.ejs')
})

router.get('/games', (req, res) => {
  res.render('games.ejs')
})

module.exports = router
