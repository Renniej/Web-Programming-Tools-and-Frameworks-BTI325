var Data_Service = require("./data-service.js")
var Promise = require('promise');
var express = require("express"); //express module
var app = express(); //express application

var path = require("path"); //path module

var HTTP_PORT = process.env.PORT ||8080;
app.use(express.static('public')); 

function On_HTTP_Start(){
    console.log("Express http server listening on " + HTTP_PORT);
}



app.get('/about', function(req, res) {
    res.sendFile("/views/about.html", {root: __dirname});
});


app.get('/', function(req, res){

    res.sendFile("/views/home.html", {root : __dirname});

});

app.get('/employees', function(req,res){

        res.send(Data_Service.getEmployees());

});

app.get('*', function(req,res){  //404 Error

   res.send("404 ERROR").status(404);
  

});

// app.get('/employees', function(req,res){




// });



app.listen(HTTP_PORT, On_HTTP_Start);


