# Bamazon
Node.js and MySQL application that recieves orders through an inquirer prompt. 

https://drive.google.com/file/d/1kf5hRfpFAqyQxx3Ry1sC9q56QDBSfjol/view



# MySQL table 
item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)

Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
The app should then prompt users with two messages.


# Prompts
The first should ask them the ID of the product they would like to buy.
The second message should ask how many units of the product they would like to buy.



Once the customer has placed the order, the application should check if the store has enough of the product to meet the customer's request.



If not, the app will log a phrase like Insufficient quantity!, and then prevent the order from going through.



However, if the store does have enough of the product, you should fulfill the customer's order.


This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.
