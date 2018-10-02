var express = require("express"); //express module
var app = express(); //express application

var path = require("path"); //path module

var HTTP_PORT = process.env.PORT ||8080;


function On_HTTP_Start(){
    console.log("Express http server listening on " + HTTP_PORT);
}




app.listen(HTTP_PORT, On_HTTP_Start);

