const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/Start', (req, res) => {
    console.log(req);
    res.send('Got a POST request')
  })

  app.post('/Stop', (req, res) => {
    console.log(req);
    res.send('Got a POST request')
  })

