const express = require('express');
const bodyParser= require('body-parser')
const port = 3000
const app= express();


// include router module
const router = require('./routes/router')
app.use('/',router)
// create application/json parser
var jsonParser = bodyParser.json()
// app.use(bodyParser.urlencoded({ extended: true }));
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// middleware
app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, 'public')));


router.post('/login', function(req,res){
    console.log(req.body);
})
// set templating engine and views path 

app.set('view engine','ejs')
// app.set('views','./views')

// to parse json data 
// app.use(bodyParser.json());
// define static path 
app.use(express.static('public'))




// start server
app.listen(port, function(){
    console.log("Server running on Port " + port )
})