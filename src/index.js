const express = require('express')
const path = require('path')

// Constants
const PORT = process.env.PORT || 8080
const HOST = '0.0.0.0'

// App
const app = express()
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api', (req, res) => {
  res.json({ greeting: 'Hello World', PORT, HOST })
})

app.get('/api/:id', (req, res) => {
  res.json({ message: `Here's your ID: ${req.params.id}` })
})

app.listen(PORT, HOST, () => console.log(`Running on //${HOST}:${PORT}`))
