// Nusaiba Mahmood
// ITPJS WK 01 HW 01
// BMIscript.js

var person =
[
    {
        name: prompt("Please enter name", "Person 1"),
        weight: parseFloat(prompt("Please enter weight (kg)", 70.00)),
        height: parseFloat(prompt("Please enter height (meters)", 1.83)),
        BMI: 0,
    },

    {
        name: prompt("Please enter name", "Person 2"),
        weight: parseFloat(prompt("Please enter weight (kg)", 65.00)),
        height: parseFloat(prompt("Please enter height (meters)", 1.63)),
        BMI: 0,
    }
];


function calculateBMI()
{
    person[0].BMI = parseFloat(((person[0].weight) / (person[0].height * person[0].height)));
    person[1].BMI = parseFloat(((person[1].weight) / (person[1].height * person[1].height)));
    console.log(person[0].name + "'s BMI: " + (person[0].BMI).toFixed(1));
    console.log(person[1].name + "'s BMI: " + (person[1].BMI).toFixed(1));
}

function compareBMI()
{
    console.log
    (
        person[0].name + "'s BMI is greater than " + person[1].name + "'s BMI: "
        + (person[0].BMI > person[1].BMI)
    );

}

calculateBMI();
compareBMI();