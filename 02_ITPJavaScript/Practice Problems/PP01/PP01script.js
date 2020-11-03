// Nusaiba Mahmood
// ITPJS PP01
// PP01script.js

/**
 * 1. The program will print out 
 * "Hello World" for t1 
 * and "undefined" for t2 
 * as both of these variables have been declared.
 * t2 has not been assigned a value so it is undefined by default.
 * the program will throw an error for t3 because t3 has not been declared.
 */


/**
 * 2.
 * The program did not print out 30 because num2 is a string type.
 * So the console.log line prints out a concatenated string.
 * To be able to print out 30 as a number we need to parseInt num 2 as shown below.
 */

var num1 = 10;
var num2 = '20';

console.log(num1 + parseInt(num2));

/**
 * 3.
 * Write a program that takes 3 names as input (prompt() function) and outputs the 
 * highest name according to lexicographical order. 
 * For example, if name1 = “samyo” and name2 = “abir”, then the final output should be “samyo”, 
 * because it is higher in lexicographical order (the letter “s” comes after “a”). 
 * Use of ternary operator is a must for this program.
 * HINT: It’s far easier than you think 😉
 */

var name1 = prompt("Enter Name", iffat);
var name2 = prompt("Enter Name", nusaiba);
var name3 = prompt("Enter Name", mahmood);

//console.log((name1>name2 ? : (name1>name3) : name2>name3 ));

