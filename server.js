const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('./'))

app.get('/', function(req, res) {
  return res.render('pages/index')
})

app.get('/about', function(req, res) {
  return res.render('pages/about')
})

app.listen(8080, function() {
  console.log('> server started...')
})
