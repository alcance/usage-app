const express = require('express')

const app = express()

// allow fetch from client
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS')
  next()
})

app.get('/api/getData', (req, res) => {
  const data = ['a', 'b', 'c']
  res.json(data)
  console.log('All data', data)
})

// Run server
app.listen(8000, () => {
  console.log(`Listening on port ${8000}`)
})