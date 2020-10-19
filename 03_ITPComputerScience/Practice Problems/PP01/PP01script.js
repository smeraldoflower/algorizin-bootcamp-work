// Nusaiba Mahmood
// ITP CS PP 01
// PP01script.js

/*
 * 1. Write a function that calculates the number of ‘a’ in a string. 
 * User will give input as a string format.
 * You need to return the number of a
 */

function count(str, chara)
{
    charaCount = 0;
    for(var i = 0; i< str.length; i++)
    {
        if(str.charAt(i) == chara) {charaCount++;}
    }
    return charaCount
}

myStr = prompt("Enter string", "aardvark");
myChara = prompt("Enter character to count", "a");

console.log("Number of '"+myChara+"' in '"+myStr+"' is: "+count(myStr, myChara));


/* 
 * 2. Write a program to swap two numbers.
 */

//var a = 7, b = 10;
function swap (a, b){ 
    console.log ("BEFORE: "+ "a = " + a + " b = " + b);
    var temp = a;
    a = b;
    b = temp;
    console.log ("AFTER: "+ "a = " + a + " b = " + b);
};

swap(7, 10);

/*
 * 3. Write a program to swap two numbers without third variable.
 */

function swapwithoutTemp(a, b)
{
    console.log ("BEFORE: "+ "a = " + a + " b = " + b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log ("AFTER: "+ "a = " + a + " b = " + b);
}

swapwithoutTemp(10, 20);

/*
 * 4. Write a program that takes three input, name, age and country with corresponding types,
 * and returns a custom object of type Student.
 * Check input types, invalid input types should be avoided.
 * Name should be type of string, if you give number it should show a log of invalid input and return.
 */

var Student = 
{
    name: prompt("Enter name", "Nusaiba"),
    age: parseInt(prompt("Enter age", 23)),
    country: prompt("Enter country", "USA"),
};

// Input Type Validation
if
(
    typeof Student.name == 'string' 
    && typeof Student.age == 'number' && !Number.isNaN(Student.age)
    && typeof Student.country == 'string'
)
{
    console.log(Student);
}
else
{
    console.log("Invalid input type entered!");
    console.log("Invalid type log: ");
    console.log
    (
        "|name: " + typeof Student.name +
        "|age: " + typeof Student.age + " isNaN: " + Number.isNaN(Student.age) + 
        "|country: " + typeof Student.country + "|"
    );
}


/*
 * 5. Write a calculator app with valid type checking. If i try to add 1112+”sdf” it should not work.
 */

var numOne = parseInt(prompt("Enter numOne", 5));
var numTwo = parseInt(prompt("Enter numOne", 10));

function add(numOne, numTwo)
{
    let sum = numOne + numTwo;
    return sum;

}

function sub(numOne, numTwo)
{
    let difference = numOne - numTwo;
    return difference;
}

function mul(numOne, numTwo)
{
    let product = numOne * numTwo;
    return product;
}

function div(numOne, numTwo)
{
    let quotient = numOne / numTwo;
    return quotient;
}

console.log("Sum = " + add(numOne, numTwo));
console.log("Dif = " + sub(numOne, numTwo));
console.log("Pro = " + mul(numOne, numTwo));
console.log("Quo = " + div(numOne, numTwo));