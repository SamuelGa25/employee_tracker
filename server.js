//requiring to install
const table = require('console.table');
const inquirer = require("inquirer");
const db =  require('./db/connection');

var prompt = inquirer.createPromptModule();


//connecting now
db.connect(err => {    
    if (err) throw err;

    console.log("Database Connected");
    console.log("\nWelcome!")
    start();
})


function start() {

    const question = {       
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: [
            "View Employees",
            "View Roles",
            "View Departments",
            "Add new Employee",
            "Add new Role",
            "Add new Department",
            "Exit"
        ],
   }
    prompt(question)
    .then((answer)=>{
            switch(answer.choice){
                case 'View Employees':
                    checkEmployees();
                    break;
                case 'View Roles':
                    checkRoles();
                    break;
                case 'View Departments':
                    checkDepartments();
                    break;
                case 'Add new Employee':
                    addNewEmployee();
                    break;
                case 'Add new Role':
                    addNewRole();
                    break;
                case 'Add new Department':
                    addNewDepartment();
                    break;
                case 'Exit':
                    Quit();
                    break;
            }
        })
    }

//showing the table with the current employees
function checkEmployees(){
    let request = "SELECT * FROM employees";
    db.query(request, function (err,rows){
        if (err) throw err;
        console.log("Viewing All Employees");
        console.table(rows);

        //starting from the begginning
        start();
    })

};
//showing the current table with the roles
function checkRoles(){
    let request = `SELECT * FROM roles`;
    db.query(request, function(err, rows){
        if (err) throw err;
        console.log("Viewning All Roles");
        console.table(rows)

        //starting from the begginning
        start();
        

    })
};
function checkDepartments() {
    let request = `SELECT * FROM departments`;
    db.query(request, function(err, rows){
        if (err) throw err;
        console.log("Viewning All Department");
        console.table(rows)

        //starting from the begginning
        start();

    })

};
//GETTING THE NEW EMPLOYEES FROM USER
let addNewEmployee = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "Add the name of the employee:",
               
        },
        {
            type: "input",
            name: "last_name",
            message: "Add the last name of the employee:",
            
        },
        {
            type: "input",
            name: "employee_id",
            message: "Enter the employee ID:",
            
        },
        {
            type: "input",
            name: "manager_id",
            message: "Enter the manager ID:",
            
        },
    ])
    //inserting the new data to the sql table.
    .then(function(response){
        db.query(`INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)`,
        [response.first_name, response.last_name, response.employee_id, response.manager_id], 
        function(err, response){
            if (err) throw err;
            console.log(err);
            //showing the table with the new data
            console.table(response);

            //NOW SHOWING THE MAIN MENU!
            inquirer.prompt([
                {
                    type:"list",
                    name: "choice",
                    message:"Select from the menu below:",
                    choices: [
                        "Main menu",
                        "Quit"
                    ],
                }
    
            ]).then((answer)=>{
                switch(answer.choice){
                    case 'Main menu':
                        start();
                        break;
                    case 'Quit':
                        Quit();
                        break;
                }
            });
    
        });

    })
};
//GETTING THE NEW ROLES FROM THE USER
let addNewRole = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "new_Role",
            message: "Enter new Role",
               
        },
        {
            type: "input",
            name: "new_salary",
            message: "Enter the salary:",
            
        },
        {
            type: "input",
            name: "new_id",
            message: "Enter the new employee ID:",
        },

    ])
    .then(function(response){
        db.query(`INSERT INTO roles(title, salary, department_id) VALUES (?,?,?)`,[response.new_Role, response.new_salary, response.new_id], 

        function(err, response){
            if (err) throw err;
            console.log(err);
            //showing the table with the new data
            console.table(response);

            //NOW SHOWING THE MAIN MENU!
            inquirer.prompt([
                {
                    type:"list",
                    name: "choice",
                    message:"Select from the menu below:",
                    choices: [
                        "Main menu",
                        "Quit"
                    ],
                }

            ]).then((answer)=>{
                switch(answer.choice){
                    case 'Main menu':
                        start();
                        break;
                    case 'Quit':
                        Quit();
                        break;
                }
            });

        });
    })
};
//GETTING THE NEW DEPARTMENT FROM THE USER
let addNewDepartment = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "new_department",
            message: "Enter the new Department:", 
        },
        {
            type: "input",
            name: "new_departmentID",
            message: "Enter the department ID:",
        },

    ]) 
    .then(function(response){
        db.query(`INSERT INTO departments(department_name, roles_id) VALUES(?,?)`,
        [response.new_department, response.new_departmentID], 

        function(err, response){
            if (err) throw err;
            console.log(err);
            //showing the table with the new data
            console.table(response);

            //NOW SHOWING THE MAIN MENU!
            inquirer.prompt([
                {
                    type:"list",
                    name: "choice",
                    message:"Select from the menu below:",
                    choices: [
                        "Main menu",
                        "Quit"
                    ],
                }

            ]).then((answer)=>{
                switch(answer.choice){
                    case 'Main menu':
                        start();
                        break;
                    case 'Quit':
                        Quit();
                        break;
                }
            });

        });

    })
};

function Quit(){
    console.log("Thank You! Goodbye!!");
    process.exit();
}







