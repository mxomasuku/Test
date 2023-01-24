var express = require('express')
var cors = require('cors')
var app = express()
const fs = require('fs/promises')
const {v4: uuid} = require('uuid')

 // ! Buggy logic 
app.post('/api/post', cors(), (req, res) => {
 const id = uuid()
 console.log(id)
 res.sendStatus(201)
})

app.get("/api", (req, res) =>{
    res.json({"changeObject": ["Lorem", "3 x R20, 1 X R10"]})
})

app.listen(5000, () => {console.log('Server started on port 5000 (localhost:5000)')})
