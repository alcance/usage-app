const express = require('express')
const fs = require('fs')

const app = express()

// allow fetch from client
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS')
  next()
})

app.get('/api/usage', (req, res) => {
  fs.readFile('./data.json', "utf8", (err, data) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    try {
      const parsedData = JSON.parse(data);
      res.json(parsedData.slice(0, req.query.numberOfUsers))
    } catch (err) {
      console.log("Error parsing JSON string:", err);
    }
  })
})

// Run server
app.listen(8000, () => {
  console.log(`Listening on port ${8000}`)
})