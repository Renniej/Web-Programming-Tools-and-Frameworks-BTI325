
const fs = require("fs");
var exports = module.exports = {};

var EMP_FILE;
var DEP_FILE;
 
exports.initialize = new Promise(function (resolve, reject){

    var ErrorFound = false;

    try{
        EMP_FILE = fs.readFileSync("./data/employees.json");
    
    }catch(err){

            var Err = new Error("Employee File Does Not Exist");
            reject(Err);
    }

     if (!ErrorFound){
        try{
        DEP_FILE = fs.readFileSync("./data/department.json");
        }
        catch(err){
            var Err = new Error("Department File Does Not Exist");
            reject(Err);
        }

        if (DEP_FILE){

            DEP_FILE = JSON.parse(DEP_FILE);
            EMP_FILE = JSON.parse(EMP_FILE);
            resolve("Department & Employees file read successfully");
        }

    }
   

});


exports.getAllEmployees = new Promise(function(resolve, reject){

    if (EMP_FILE && EMP_FILE.length != 0){
        resolve(EMP_FILE);
    }
    else{
        err = new Error("Employee File is either empty or does not exist );")
        reject(err);
    }
   
})

exports.getManagers = new Promise(function(resolve, reject){

    
    if (EMP_FILE && EMP_FILE.length != 0){

        var managers= [];

        for (var i =0; i < EMP_FILE.length; ++i){
            if (EMP_FILE[i].isManager == true){
                managers.push(EMP_FILE[i]);
            }
        }

        if (managers.length != 0 ){

            resolve(managers);

        }
        else{

            var err = new Error("No managers exist")
            reject(err)
            
        }
    }
    else{
        var err = new Error("Employee File is either empty or does not exist);")
        reject(err);
    }
   

})

exports.getDepartments = new Promise(function(resolve, reject){

   

        if (DEP_FILE && DEP_FILE.length > 0){
            resolve(DEP_FILE)
        }
        else{
            var err = new Error("DEP_FILE is either empty or does not exist");
            reject(err);
        }
  
    
});




// function test(){

//     exports.initialize.then(function(File){

//         console.log(File)
//     }).catch(function(error){
//         console.log(error.message);
//     })

// };

// test();



