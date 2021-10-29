const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Hello World! This is our new WebApp')
})
app.get('/profile', (req, res) => {
  res.send('This is Our Profile')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})