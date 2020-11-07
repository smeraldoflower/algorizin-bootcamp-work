// Nusaiba Mahmood
// ITPJS PP05
// PP05script.js

/**
 * 3.
 * Create a Cart system for an ecommerce website. 
 * Users should be able to add/remove items and get cart related information.
 * No need for DOM Manipulation. You will hardcode products and the Cart system.
 * 
 * NOTE: 
 * You will create a Cart class that will handle cart items and different methods
 * Product information will be hard coded as objects having attributes like productName, price etc.
 * Methods like addItem(), removeItem(), calculateSubtotal(), applyCoupon() should be available.
 * You’re strictly required to include the usage of Javascript functions - reduce() and filter()
 */

function cart()
{ 

    this.items = [];
    
    function addItem(name, price)
    {
        this.items.push((name,price);
    }

    function removeItem(name, price)
    {
        this.items.pop((name,price);
    }

    function cart()
    {
        this.items = [];
    }
}

//  * so a Cart object has an items object which is an array
//  * addItem pushes item in the array
//  */