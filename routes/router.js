const express = require('express');
const bodyParser= require('body-parser')
const router = express.Router()

router.use(bodyParser.urlencoded({extended:true}))
// var jsonParser = bodyParser.json()
// define your routes here 
router.get('/', function(req,res){
    res.render('login');
})

router.post('/login',function(req,res){
    // console.log(req.body);
    res.send(req.body);
})

router.get('/dashboard', function(req,res){
    res.render('home')
})

router.get('/task', function(req,res){
    res.render('task/task');
});

router.get('/task/create', function(req,res){
    res.render('task/create');
});

// router.post('/task/create')

router.get('/profile', function(req,res){
    res.render('profile')
})


router.get('/call/:name/:id', function(req,res){
    res.send('<h1>Hey '+req.params.name+' ,Welcome to my First express app. Your Id number is : '+req.params.id);
})

// for invalid url 
router.get('*', function(req,res){
    res.send('Inavlid Url');
})

// export this router module to use in index.js file
module.exports = router;