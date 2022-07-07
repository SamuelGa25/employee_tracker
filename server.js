//requiring to install
const inquirer = require('inquirer');
const mysql = require("mysql2");
const table = require("console.table");

//defining the array of questions 
const depArray = [];
const employeeArray = [];
const roleArray = [];


//connection to the database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    //username
    user: "root",
    //password
    password: "Samuel2205",
    database: "company"

});

//connecting
connection.connect(function(err){
    if (err) throw err;
})



//Executing what the user wants choose to do
//list of content

const option = (data) =>{
    let user = true;
    switch(data.menuOptions){
        //if user chooses to list employees
        case "List Employees":
            getEmployee();
            break;
        //if user chooses to list departments
        case "List Departments":
            getDepartment();
            break;
        //if user chooses to list Roles
        case "List Roles":
            getRole();
            break;
        //if user chooses to enter New Department
        case "Add new Department":
            getNewDepartment();
            break;
         //if user chooses to enter New Role
         case "Add new Role":
            getNewRole();
            break;
         //if user chooses to enter New Employee
         case "Add new Employee":
            getNewEmployee();
            break;
         //if user chooses to change employee role
         case "Change employee's role":
            updateEmployee();
            break;
        //if user chooses to Exit
            case "Exit":
            user = false;
            break;

    }
    //if user decides to contine or not





}