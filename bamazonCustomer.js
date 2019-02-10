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
//  connection.connect(function(err) {
//     //if (err) throw err;
//     console.log("connected as id " + connection.threadId);
//     findItems();
// });
// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
//     connection.query("SELECT * FROM products", function(err, res){
//       if  (err) throw err;
//       console.log(res);
//     });
//     findItems();
//     //connection.end();
//   });
findItems();
function findItems() {
    connection.connect(function(err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        connection.query("SELECT * FROM products", function(err, res){
          if  (err) throw err;
          console.log(res);
        
        findItems();
        //connection.end();
      
    inquirer
    .prompt([
         {
            name: "id",
            type: "input",
            message: "What is the ID number of the product you would  like to buy?"
        },{
             name: "units",
             type: "input",
             message: "How many units of the product would you like to buy?"
        
        }
    ]).then(function(inquirerResponse){
        var chosenItem;
        for (var i = 0; i < res.length; i++) {
          if (results[i].item_id === inquirerResponse.id) {
            chosenItem = res[i];
          }
        }

        // determine if bid was high enough
        if (chosenItem.stock_quantity < parseInt(inquirerResponse.units)) {
          // bid was high enough, so update db, let the user know, and start over
          connection.query(
            "UPDATE auctions SET ? WHERE ?",
            [
              {
                stock_quantity: inquirerResponse.units
              },
              {
                id: chosenItem.id
              }
            ],
            function(error) {
              if (error) throw err;
              console.log("Order placed successfully!");
              
            }
          );
        }
        else {
          // bid wasn't high enough, so apologize and start over
          console.log("Insufficent quantity!");
          
        }
      
    
    })
    })
   })
}
