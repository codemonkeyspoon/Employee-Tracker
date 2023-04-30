const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'rootroot',
  database: 'company_db',
});

connection.connect(err => {
  if (err) throw err;
  console.log("WELCOME TO PAWNEE CITY HALL EMPLOYEE TRACKER");
  startMenu();
});

const startMenu = () => {
    inquirer.prompt({
        message: 'What would you like to do today?',
        name: 'menu',
        type: 'list',
        choices: [ 
          'View all departments',
          'View all jobs',
          'View all employees',
          'Add a department',
          'Add a job',
          'Add an employee',
          'Update employee job',
          'Exit',
        ],
      })
      .then(response => {
          switch (response.menu) {
          case 'View all departments':
            viewDepartment();
            break;
          case 'View all jobs':
            viewJobs();
            break;
          case 'View all employees':
            viewEmployees();
            break;
          case 'Add a department':
            addDepartment();
            break;
          case 'Add a job':
            addJob();
            break;
          case 'Add an employee':
            addEmployee();
            break;
          case 'Update employee job':
            updateEmployee();
            break;
          case "Exit":
            connection.end();
            break;
          default:
            connection.end();
        }
      });
  };