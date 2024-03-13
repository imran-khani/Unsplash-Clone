const express = require('express');

const app = express()
const port = 3000

app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

app.get('/about/:slug', (req, res) => {
  res.send(`Hello from ${req.params.slug}`)
})

app.get('/user/:id', (req, res) => {
  res.send('hello from user')
})

app.get('/index', (req, res) => {
  res.sendFile('templates/index.html', { root: __dirname });
})

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})