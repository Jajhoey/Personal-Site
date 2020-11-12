var express = require('express')
var app = express()

app.use('/assets', express.static('assets'))

app.set('view engine', 'ejs')

var router = require('./router.js')

app.use('/', router)
app.use('/about', router)
app.use('/projects', router)

app.listen(5000, () => {console.log('App listening on port 5000...')})
