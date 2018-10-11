const express = require('express')
const app = express()

const sampleData = require('./sampleData')

app.get('/sample-data.json', (req, res) => {
  res.json(sampleData)
});

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`listening on port ${port}...`)
})
