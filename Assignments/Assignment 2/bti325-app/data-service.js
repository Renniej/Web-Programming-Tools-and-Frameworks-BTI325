
var fs = require("fs");



module.exports.getEmployees = function(){

    Employees = fs.readFileSync(Emp_JSON);

    return JSON.parse(Employees);

}