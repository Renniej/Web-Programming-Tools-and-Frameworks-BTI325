/*********************************************************************************
*  BTI325 – Assignment 02
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part *  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Tai-Juan Rennie Student ID: 101359172  Date: 10/8/2018
*
*  Online (Heroku) Link: https://evening-taiga-56691.herokuapp.com/
*
********************************************************************************/ 


var Data_Service = require("./data-service.js")
var Promise = require('promise');
var express = require("express"); //express module
var multer = require("multer"); // Multer module
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

        Data_Service.getAllEmployees.then(function(EMP_FILE){
            res.send(JSON.stringify(EMP_FILE));
        }).catch(function(err){
            console.log(err.message);
            res.status(500).JSON({error : err.message})
        })

});

app.get('/managers', function(req,res){

    Data_Service.getManagers.then(function(managers){
        res.send(JSON.stringify(managers));
    }).catch(function(err){
        console.log(err.message);

        res.status(500).json({error: err.message})
    })

})

app.get('/departments', function(req,res){

    Data_Service.getDepartments.then(function(FILE){

       res.send(JSON.stringify(FILE));
     

    }).catch(function(err){

        console.log(err.message);
        res.status(500).JSON({error : err.message})

    });

});



app.get('/employees/add', function(req, res){


    res.sendFile("/views/addEmployee.html", {root : __dirname});


});



app.get('/images/add', function(req, res){


    res.sendFile("/views/addImage.html", {root : __dirname});


});


app.get('*', function(req,res){  //404 Error

   res.send("404 ERROR").status(404);

});






app.listen(HTTP_PORT, On_HTTP_Start);


