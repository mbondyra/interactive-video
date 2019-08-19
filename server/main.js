const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const request = require('request')
const get = require('lodash.get')
const app = require('./application')

const expressApp = express()

var serveStatic = require('serve-static');

var fs = require('fs');
expressApp.set('port', (process.env.PORT || 5000));
expressApp.use(bodyParser.json())

expressApp.all('*', function(req, res, next) {
  const origin = req.get('origin')
  res.header('Access-Control-Allow-Origin', origin)
  res.header("Access-Control-Allow-Headers", "X-Requested-With")
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
});

expressApp.get('/id/:id/', function (req, response) {
  const EXAMPLE = 'G9UJ94'
  const retrieveForm = {
    url: 'https://api.typeform.com/forms/'+req.params.id,
    method: 'Get'
  }

  request(retrieveForm, function (err, typeformResponse) {
    if (err !== null || typeformResponse === null || typeformResponse.body === null || req.params.id !== EXAMPLE) {
      response.send(get(JSON.parse(typeformResponse.body), 'description'))
    } else {
      const fields = app.getFields(typeformResponse)

fs.writeFile(`static/${req.params.id}.json`, JSON.stringify(fields, null, 2), function(err) {
     if (err) {
         return console.log(err);
         response.send("There is an error with writing typeform")
    }
    response.send(fields)
    
    })
    }
  })
})

//console.log(__dirname)
//expressApp.use(serveStatic(path.join(__dirname, 'static')))
expressApp.use(express.static(__dirname + '/static'));

// const server = http.createServer(expressApp)

expressApp.listen(expressApp.get('port'), function () {
  console.log('Web server listening on port ' + expressApp.get('port'))
})
