const express = require('express')
const app = express()

const sampleData = require('./sampleData')

app.get('/sample-data.json', (req, res) => {
  res.json(sampleData)
});

app.listen(80, () => {
  console.log('listening on port 80...')
})
