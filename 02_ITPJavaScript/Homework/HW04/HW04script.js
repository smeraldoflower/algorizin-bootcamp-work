// Nusaiba Mahmood
// ITJS HW 04
// HW04script.js

/**
 * 1. 
 * What is the core difference between ​call ​and ​apply​? Give a simple example of the difference. 
 *  
 */

/**
 * ANS: The main difference between call and apply is how the arguments are provided. 
 * For call multiple arguments are provided individually 
 * where as for apply the arguments are provided as an array or array like obj.
 * 
 *     Example:
 * 
 *     function numberCalculations(arr)
 *     {
 *         const numbers_arr =  arr; // [5, 6, 2, 3, 7]
 *         const max = Math.max.apply(null, numbers_arr);
 *         const min = Math.max.apply(null, numbers_arr);
 *         numberAssigns.call(this, max, min);
 *     }
 * 
 *     function numberAssigns(max, min)
 *     {
 *         this.max = max;
 *         this.min = min;
 *     }
 * 
 */



/**
 * 2. 
 * Write a program that acts as an e-commerce Product information system.
 * Your program should have a function constructor to create new Products. 
 * The function will take parameters productName, productPrice. Your product should also have a method to apply coupons.
 * So when a coupon of 10% is applied, the price of the product should bereduced by 10%. 
 * No need of DOM manipulation, hardcore the information in code.
 * NOTE: All the variables and methods of the products should be inaccessible from theoutside users 
 * (similar to private methods/variables if you compare with Java).
 * 
 */

// var products = [];

// function Product(productName, productPrice, coupon)
// {
//    let buildProduct = function()
//    {
//       this.name   = productName;
//       this.price  = productPrice;
//       this.applyCoupon = function(coupon){ this.price -= (this.price*coupon*0.01) };
//       if(typeof(coupon) === 'number'){this.applyCoupon(coupon)};

//       return {name: this.name, price: this.price};
//    }

//    return buildProduct();
// }

// myProduct = new Product('perfume', 25,);

// products.push(myProduct);

// console.log (myProduct);
// console.log (products);


/**
 * 3.
 * Write a program that appends an array with another but without creating a new copy of the array.
 * (You CAN’T use any kind of​loop​. You also CAN’T use ​concat​, as ​concat​creates a newarray)
 * 
 */

var arr         = [1, 2, 3, 4, 5];
var appendarr = [6, 7, 8, 9, 10];

function appendArray(array, appendthisarr)
{
   appendthisarr.unshift(0);
   appendthisarr.unshift(array.length);
   array.splice.apply(array, appendthisarr);
}

console.log(arr);

appendArray(arr, appendarr);

console.log(arr);