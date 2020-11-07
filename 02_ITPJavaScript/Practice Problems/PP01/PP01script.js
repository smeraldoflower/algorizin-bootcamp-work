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

            // let name = "";

            // for(let i=0; i<3; i++)
            // {
            //     let next = prompt("Enter Name", "nusaiba");

            //     //Ternary operator used
            //     name = (next > name) ? next : name;
            // }

            // console.log("Highest in lexicographical order: " + name);

/**
 * 4.
 * Write a program that takes a student’s obtained mark in a particular subject
 * and outputs the grade corresponding to the mark.
 * If the student gets 79.5, it should be rounded to 80 and shown as A+ 
 * (considering >=80 corresponds to A+)
 * Hint: Look for how a number can be rounded in JavaScript
 */

 /**
  * A+  >= 80
  * A   79-70
  * B   69-60
  * C   59-50
  * D   49-40
  * F   <= 39   
  */

            // let mark = Math.round(parseFloat(prompt("Enter student's mark", 79.5)));
            // let grade = "";

            // if(mark <= 39)
            // {
            //     grade = "F";
            // }
            // else if(mark <= 49)
            // {
            //     grade = "D";
            // }
            // else if (mark <= 59)
            // {
            //     grade = "C";
            // }
            // else if (mark <= 69)
            // {
            //     grade = "B";
            // }
            // else if (mark <= 79)
            // {
            //     grade = "A";
            // }
            // else
            // {
            //     grade = "A+";
            // }

            // console.log("Grade: " + grade);

/**
 * 5.
 * Design an employee qualification system.
 * The job of the system is to first take the employee’s personal information, these are
 * 
 * a.Name
 * b.Age
 * c.Skills:
 *      i.Soft Skills (array)
 *      ii.Technical Skills (array)
 * d.Location
 * 
 * For an employee to qualify for the job, he needs to meet all the requirements mentioned below:
 * 
 * - Age must be greater than or equal to 30
 * - Number of technical skills should be greater than soft skills
 * - The person must be living in either Texas or Florida
 * 
 * If the person qualifies, your program should output “(name) is qualified for the job"
 * 
 * Demonstration of Object is a must here, avoid using variables unless absolutely required.
 */

// Employee Qualification System

// Employee Object
let employee =
{
    name: prompt("Enter name", "Nusaiba"),
    age: parseInt(prompt("Enter age", 30)),
    location: (prompt("Enter location", "TEXAS")).toUpperCase(),
    skills:
    {
        soft:[],
        technical:[],
    }
}

// Prompting input for skills arrays
{
    let softie = prompt("Enter soft skills. Leave blank to stop entering.", "leadership");
    while(softie!= "")
    {
        softie = prompt("Enter soft skills. Leave blank to stop entering.", "leadership");
        employee.skills.soft.push(softie);
    }

    let techie = prompt("Enter technical skills. Leave blank to stop entering.", "Javascript");
    while(techie!= "")
    {
        techie = prompt("Enter technical skills. Leave blank to stop entering.", "Javascript");
        employee.skills.technical.push(techie);
    }
}

// Checking qualifications
if
(
    (
        ( (employee.age >= 30) ? true : false ) &&
        ( (employee.location == "FLORIDA" || employee.location == "FL" || 
            employee.location == "TEXAS"|| employee.location == "TX") ? true : false ) &&
        ( (employee.skills.technical.length > employee.skills.soft.length) ? true : false )
    )
)
{
    console.log(employee.name + " is qualified for the job.");
}
else
{
    console.log(employee.name + " is NOT qualified for the job.");
}