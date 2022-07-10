//requiring to install
const inquirer = require('inquirer');
const mysql = require("mysql2");
const table = require("console.table");
const e = require('express');

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

    if(!user){
        console.log("Thank You!, See you later!");
        process.exit(0);
    }else{
        setTimeout(()=>{
            //asking user to continue
            inquirer.prompt([
                {
                    type: "confirm",
                    name: "continue",
                    message: "Do you want to continue?",
                    default: true
                }
            ])
            .then(answer =>{
                //if user decides to come to back to the begginning 
                if (answer.continue == true){
                    return start();
                }else{
                    //if user decides to exit the program
                    console.log("Thank You, Good bye!");
                    process.exit(0)
                    
                }
            })
        })

    }

};

//program shows to the user main display!
let mainDisplay = () =>{
    inquirer.prompt([
        {
            type: "List",
            name: "mainOptions",
            message: "What would you like to do?",
            choices: [
                "List Department",
                "List Roles",
                "List Employees",
                "Add new  Department",
                "Add new Role",
                "Add new Employee",
                "Switch Employee's role",
                "Exit",

            ]
        },
        {
            type: "list",
            name: "newDepartment",
            message: "What department would you like to add?",
            choices: depArray,
        },
        {
            type: "input",
            name: "newRole",
            message: "What role would you like to add?"
        },
        {
            type: "input",
            name: "department",
            message: "In what department should the new role be?"

        },
        {
            type: "input",
            name: "salary",
            message: "What's the salary of the role?"
        },
        {
            type: "input",
            name: "first_name",
            message: "Add the name of the employee:"
        },
        {
            type: "input",
            name: "last_name",
            message: "Add the last name of the employee?"
        
        },
        {
            type: "list",
            name: "role",
            message: "What is the role for the employee?",
            choices: roleArray
        },
        {
            type: "list",
            name: "role",
            messsage: "Select a manager for that employee:",
            choices: employeeArray,
        },
        {
            type:"list",
            name: "employee",
            message:"Select an employee for a role change:",
            choices: employeeArray
        },
        {
            type: "list",
            name: "employee_role",
            choices: roleArray
        }
    ])
    //sending answers to option function.
    .then((answers)=> option(answers))
    .catch((err)=> console.log(err));

};

//connection with SQL tables
//adding info to arrays 
let questionArrays = () =>{

    //addind roles to the table
    connection.query(`SELECT title * FROM roles ORDER BY id ASC`, (err, rows)=> {
        rows.map((element) => {
            if (err) throw err;
            rolesArray.push(element.title);
        });

    });
    //adding new departments to the table 
    connection.query(`SELECT * FROM departments`, (err, rows) => {
        rows.map((element) => {
            if (err) throw err;
            rolesArray.push(element.newDpartment);

        });
    });

    //adding new employees to the table 
    connection.query(`SELECT first_name, last_name FROM employees`, (err, rows) => {
        rows.map((element)=> {
            if (err) throw err;
            rolesArray.push(`${element.first_name} ${element.last_name}`)

        });

    })

};

// GETTING THE DEPARTMENT
let getDepartment = () => {
    connection.query(`SELECT * FROM departments`, (err, rows)=>{
        if (err) throw err;
        //showing the table with the department.
        console.table(rows);

    });

}
//GETTING THE ROLES
let getRole = () => {
    connection.query(`SELECT roles.id, roles.title, roles.salary, roles.department  
                    FROM roles LEFT JOIN departments ON roles.department = departments.id `, 
                    (err,rows)=> {
                    if (err) throw err;
                    //showing the table with roles
                    console.table(rows)

    });

}
//GETTING THE EMPLOOYES
let getEmployee = () => {
    connection.query(`SELECT employee.ID, employee.first_name, employee.last_name, role.title, department.name AS dept
                        roles.salary, manager.first_name AS manager_first, manager.last_name AS manager_last
                        FROM EMPLOYEES employee
                        LEFT JOIN ROLES role ON employee.role_id = role.ID
                        LEFT JOIN DEPARTMENTS department on roles.department.id = department.id
                        LEFT JOIN EMPLOYEES manager ON employee.manager.id = manager.id`,
                        (err, rows)=> {
        if (err) throw err;
        //showing the table with the employee.
        console.table(rows);

    });

    
}
//GETTING THE NEW DEPARTMENTS 
let getNewDepartment = () =>{
    connection.query(`INSERT INTO departments (name) VALUES (?)`,
        [data.name], (err, rows)=>{

        if (err) throw err;
            //showing the table with the new department.
            console.table(rows); 
    });

    

}
//GETTING THE NEW ROLES
let getNewRole = () => {
    connection.query(`SELECT`,(err, rows) => { 
        
        if (err) throw err;
            //showing the table with the new role.
            console.table(rows);
    });

    

}
//GETTING THE NEW EMPLOYEES
let getNewEmployee = () => {
    connection.query(`SELECT`, (err, rows) => {

        if (err) throw err;
            //showing the table with the new employee.
            console.table(rows);
    });

    

    

}
//GETTING AN UPDATE FROM A CURRENT EMPLOYEE
let updateEmployee = () => {
    connection.query(`SELECT`,(err, rows) =>{

    });

}

let whileConnnecting= (res, rej) => {

    //declaring the arrays
    questionArrays();
    res("Completed!!");
    rej("Error just happened!");

    console.log("--------------------------------");
    consol.log("-------EMPLOYEE TRACKER----------");
    console.log("---What would you like to do?---");
    console.log("--------------------------------");

}

let start = () => {
    new Promise(whileConnnecting).then(mainDisplay).catch((error) => {
        console.log(error);
    });

};

//starting the tracker.
start();





