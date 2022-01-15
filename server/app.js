const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('200 response from server')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})