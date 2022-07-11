//requiring to install
import inquirer from "inquirer";
import mysql from "mysql2";
//CURRENTLY HAD AN ISSUE WITH THE REQUIRE() SO I HAD TO DO IMPORT.

const {connection} = require("./db");


//connection to the database
const connection = mysql.createConnection({
    host: "localhost",
    //port: 3306,
    //username
    user: "root",
    //password
    password: "Samuel2205",
    database: "employee"

});
//connecting now
connection.connect(async function(){
    start();
})



function start(){

    inquirer.prompt([
        {
            type: "List",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                "View Employees",
                "View Roles",
                "View Departments",
                "Add new Employee",
                "Add new Role",
                "Add new Department",
                "Exit",
            ],
        },
    ])

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
            case 'Quit':
                Quit();
                break;
        }
    })
}

//showing the table with the current employees
function checkEmployees(){
    let request = "SELECT * FROM employees";
    connection.query(request, function (err,rows){
        if (err) throw err;
        console.log("Viewing All Employees");
        console.table(rows);
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
        //Going back to the main menu
        ]).then((answer)=>{
            switch(answer.choice){
                case 'Main Menu':
                    start();
                    break;
                case 'Quit':
                    Quit();
                    break;
            }
        });
    })

};

//showing the current table with the roles
function checkRoles(){
    let request = `SELECT * FROM roles`;
    connection.query(request, function(err, rows){
        if (err) throw err;
        console.log("Viewning All Roles");
        console.table(rows)
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
                case 'Main Menu':
                    start();
                    break;
                case 'Quit':
                    Quit();
                    break;
            }
        });

    })
};
function checkDepartments() {
    let request = `SELECT * FROM roles`;
    connection.query(request, function(err, rows){
        if (err) throw err;
        console.log("Viewning All Department");
        console.table(rows)
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
                case 'Main Menu':
                    start();
                    break;
                case 'Quit':
                    Quit();
                    break;
            }
        });

    })

};
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
        connection.query(`INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES(?,?,?)`,
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
                    case 'Main Menu':
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

let addNewRole = () => {
    inquirer.prompt([
        

    ])


}





function Quit(){
    console.log("Thank You! Goodbye!!");
    process(exit);
}







