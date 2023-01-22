var express = require('express')
var cors = require('cors')
var app = express()
 
app.options('/products/:id', cors()) // enable pre-flight request for DELETE request
app.delete('/products/:id', cors(), function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})
 
app.get("/api", (req, res) =>{
    res.json({ "users": [{userName: "Mxolisi", amount: 50 
}, {userName: "Manatsa", amount: 50 
}] })
})

app.listen(5000, () => {console.log('Server started on port 5000')})
