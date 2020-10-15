var express=require("express"); 
var bodyParser=require("body-parser"); 
  
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/gfg'); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 
  
var app=express() 
  
  
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 
  
c  
  
app.get('/',function(req,res){ 
res.set({ 
    'Access-control-Allow-Origin': '*'
    }); ss
return res.redirect('/index.html'); 
}).listen(3000) 
  
  
console.log("server listening at port 3000");