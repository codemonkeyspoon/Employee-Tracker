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
});