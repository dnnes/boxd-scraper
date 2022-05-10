const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 4000

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


app.get('/', (req, res) => {
  console.log(req)
  //res.send(req.params)
})

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('ok')

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
