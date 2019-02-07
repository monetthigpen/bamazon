require("dotenv").config();
var inquirer =  require("inquirer");
var password = require("./key");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306 ,
  
    // Your username
    user: "root",
  
    // Your paback8987ssword
    password: process.env.password,
    database: "bamazon_db"
});
connection.connect(function(err) {
    //if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //afterConnection();
});