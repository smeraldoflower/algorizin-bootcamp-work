// Nusaiba Mahmood
// ITPJS PP02
// PP02script.js

//  //**===**// Use these markers to comment/uncomment the 3 main parts of this code.

// /**
//  * 1.
//  * Write a program that takes 5 number inputs (prompt function) from users and stores it in the array.
//  * PrintOut the min, max, median and average of the array.
//  * 
//  * NOTE: The program has to be error-proof.
//  * The user can input anything including Strings, Numbers, Special Characters etc. 
//  * Your job would be to ignore invalid values
//  * (optionally show an alert warning that the value is not a valid number) and only accept 5 numbers.
//  * 
//  * HINT: You might need to look into JavaScript sort function and also a few type checking functions
//  */

// let arr = [];
// while(arr.length != 5)
// {
//     let value = parseFloat(prompt("Enter a number", 5));
    
//     if((typeof(value) == "number") && (!isNaN(value)))
//     {
//         arr.push(value);
//     }
//     else
//     {
//         window.alert
//         (
//             "Invalid number! Please enter a valid number value."+" Slots remaining: "+ (5-(arr.length))
//         );
//     }
// }

// console.log(arr);

// // Min & Max
// let min = Math.min.apply(null, arr);
// let max = Math.max.apply(null, arr);

// // Sorting

//     // descending order
//     // arr.sort(function(a, b){return b - a});

// // ascending order
// arr.sort(function(a, b){return a - b});
// console.log(arr);

// // Median
// let med;

// if(arr.length % 2 == 1) // Odd length arrays
// {
//     // 5 / 2 = 2.5 + 0.5 = 3 - 1 = arr[2]

//     med = arr[((arr.length/2) + 0.5) - 1];
// }
// if(arr.length % 2 == 0) // Even length arrays
// {
//     // 4 / 2 = 2 - 1 = arr[1]
//     //       +
//     // 4 / 2 = 2 + 1 = 3 - 1 = arr[2]
//     // arr[1] + arr[2] / 2 = median

//     med = (arr[(arr.length/2) - 1] + arr[((arr.length/2) + 1) - 1]) / 2;
// }

// // Sum & Average
// let sum = arr.reduce(function(a, b){return a + b;}, 0);
// let avg = (sum/arr.length);


// console.log("Min: "+ min);
// console.log("Max: "+ max);
// console.log("Med: "+ med);
// console.log("Sum: "+ sum);
// console.log("Avg: "+ avg);

//  //**===**//

/**
 * 2.
 * Write a function that takes different parameters and creates a person object.
 * The parameters would be:
 * - Name
 * - Height
 * - Weight
 * - BMI (initially null)
 * 
 * It would also contain a method to calculate BMI of the person if the BMI is currently null,
 * and set the new BMI. 
 * And also, another function to compare BMI with another person.
 * 
 * Now, from user’s take inputs (prompt function) and create 2 persons.
 * Show their individual BMI. And also demonstrate the compare function.
 * The compare function should output something similar to this: “(Name1)’s BMI is greater than (Name2)’s”.
 * Also, consider the fact that both BMI can be the same.
 * 
 * NOTE: You are restricted to use only Objects and Object methods.
 * Avoid using any external function except the object constructor
 */

var person =
{
    name: prompt("Enter name:", "Person 1"),
    height: parseFloat(prompt("Enter height (cm):", 162)),
    weight: parseFloat(prompt("Enter weight (kg):", 70)),
    BMI: null,

    // TO DO : object methods for calculate and set BMI

    calculateBMI: function()
    {
        this.BMI = this.height + this.weight
        return this.BMI;
    }
} 

  //**===**//