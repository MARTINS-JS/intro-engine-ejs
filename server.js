const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('./'))

app.get('/', function(req, res) {
  const summary = {
    title: 'Tópicos essenciais:',
    items: [
      'Instalação e Configuração;',
      'Sintaxe Básica;',
      'Estruturas de Controle;',
      'Partials;',
      'Renderização de Dados Dinâmicos.'
    ]
  }


  return res.render('pages/index', { summary })
})

app.get('/about', function(req, res) {
  return res.render('pages/about')
})

app.listen(8080, function() {
  console.log('> server started...')
})
