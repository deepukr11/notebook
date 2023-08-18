const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())

app.use(express.json());

app.use('/api/auth',require('./routes/auth'))

app.use('/api/notes',require('./routes/notes'))

app.use('/api/user',require('./routes/user'))



app.get('/' ,(req , res) => {
  res.send("hii i am ")
 })

 app.get('/home' ,(req , res) => {
  res.send("I am home ")
 })

  app.listen(port,()=>{
    console.log("server is running at port " + port)
  })