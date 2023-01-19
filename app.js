const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/persons', (req, res) => {
  res.status(200).json([
    {
      id: '001',
      name: 'Jorge Soto'
    },
    {
      id: '002',
      name: 'Ivan Torres'
    },
    {
      id: '003',
      name: 'Luis Costa'
    },
  ])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})