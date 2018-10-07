
const fs = require("fs");
var exports = module.exports = {};



var 

 
exports.initialize = function(){


    try{

        var EMP_file = fs.readFileSync("./data/employees.json");


    } catch (err){


    }
    var DEP_file = fs.readFileSync("./data/department.json");

    console.log(EMP_file);


}



exports.getAllEmployees = function(){

    var Raw_Data = fs.readFileSync(EMP_file);
    var Employees = JSON.parse(Raw_Data);

    return Employees;

};



exports.getManagers = function(){

    var Employees = exports.getAllEmployees();
    var Managers = [];


    for (var i = 0; i < Employees.length; ++i){

        if (Employees[i].isManager == true){
            Managers.push(Employees[i]);
        }
    }


    return Managers;

};


exports.getDepartments = function(){

    var Raw_Data = fs.readFileSync(DEP_file);
    var Deparments = JSON.parse(Raw_Data);


    return Deparments;

}

exports.initialize();