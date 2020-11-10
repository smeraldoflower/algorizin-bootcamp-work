// Nusaiba Mahmood
// ITPJS PP02
// PP02script.js

 //**===**// Use these markers to comment/uncomment the 3 main parts of this code.
 
 //**===**// QUESTION 1. START
{
    /**
     * 1.
     * Write a program that takes 5 number inputs (prompt function) from users and stores it in the array.
     * PrintOut the min, max, median and average of the array.
     * 
     * NOTE: The program has to be error-proof.
     * The user can input anything including Strings, Numbers, Special Characters etc. 
     * Your job would be to ignore invalid values
     * (optionally show an alert warning that the value is not a valid number) and only accept 5 numbers.
     * 
     * HINT: You might need to look into JavaScript sort function and also a few type checking functions
     */

    let arr = [];
    while(arr.length != 5)
    {
        let value = parseFloat(prompt("Enter a number", 5));
        
        if((typeof(value) == "number") && (!isNaN(value)))
        {
            arr.push(value);
        }
        else
        {
            window.alert
            (
                "Invalid number! Please enter a valid number value."+" Slots remaining: "+ (5-(arr.length))
            );
        }
    }

    console.log(arr);

    // Min & Max
    let min = Math.min.apply(null, arr);
    let max = Math.max.apply(null, arr);

    // Sorting

        // descending order
        // arr.sort(function(a, b){return b - a});

    // ascending order
    arr.sort(function(a, b){return a - b});
    console.log(arr);

    // Median
    let med;

    if(arr.length % 2 == 1) // Odd length arrays
    {
        // 5 / 2 = 2.5 + 0.5 = 3 - 1 = arr[2]

        med = arr[((arr.length/2) + 0.5) - 1];
    }
    if(arr.length % 2 == 0) // Even length arrays
    {
        // 4 / 2 = 2 - 1 = arr[1]
        //       +
        // 4 / 2 = 2 + 1 = 3 - 1 = arr[2]
        // arr[1] + arr[2] / 2 = median

        med = (arr[(arr.length/2) - 1] + arr[((arr.length/2) + 1) - 1]) / 2;
    }

    // Sum & Average
    let sum = arr.reduce(function(a, b){return a + b;}, 0);
    let avg = (sum/arr.length);


    console.log("Min: "+ min);
    console.log("Max: "+ max);
    console.log("Med: "+ med);
    console.log("Sum: "+ sum);
    console.log("Avg: "+ avg);

}
 //**===**// QUESTION 1. END

 //**===**// QUESTION 2. START
{
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

    function Person(name, height, weight)
    {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.BMI = null;

        this.calculateBMI = function()
        {
            if (this.BMI == null)
            {
                this.BMI = parseFloat((this.weight / (this.height * this.height))).toFixed(2);
            }        
            return this.name + "'s BMI is " + this.BMI;
        }

        this.compareBMI = function(Person)
        {
            if(this.BMI == Person.BMI)
            {
                return this.name + "'s BMI is the same as " + Person.name + "'s.";
            }
            else if(this.BMI > Person.BMI)
            {
                return this.name + "'s BMI is greater than " + Person.name + "'s.";
            }
            else
            {
                return this.name + "'s BMI is less than " + Person.name + "'s.";
            }        
        }
    }

    var person1 = new Person
    (
        prompt("Enter name:", "Person 1"), 
        parseFloat(prompt("Enter height (m):", 1.62)), 
        parseFloat(prompt("Enter weight (kg):", 70)),
    );

    var person2 = new Person
    (
        prompt("Enter name:", "Person 2"), 
        parseFloat(prompt("Enter height (m):", 1.72)), 
        parseFloat(prompt("Enter weight (kg):", 80)),
    );

    console.log(person1.calculateBMI());
    console.log(person2.calculateBMI());

    console.log(person1.compareBMI(person2));
    console.log(person2.compareBMI(person1));
    console.log(person1.compareBMI(person1));

}
 //**===**// QUESTION 2. END

  //**===**// QUESTION 3. START
{
    /**
     * 3.
     * Create an array of student objects with around 5-6 students (hardcode it, no need to take user inputs), 
     * each student having the following attributes:
     * - Name
     * - Marks: Array
     * 
     * The objects should not contain any object methods, only name and marks.
     * Your task is to find the brightest student of them all based on average marks.
     * Consider the fact that multiple students might have the same average marks,
     * in that case all of them would be considered brightest.
     * 
     * The outputs should be strictly like this:
     * 
     *      Alice is the brightest student of them all
     * 
     *      OR
     * 
     *      Alice, John and Bob are the brightest students
     * 
     * Avoid code repetitions
     */

    let students =
    [
        {
            name: "Alice",
            marks: [90, 80, 87],
            avg: null
        },

        {
            name: "John",
            marks: [97, 87, 87],
            avg: null
        },

        // {
        //     name: "Jack",
        //     marks: [97, 87, 87],
        //     avg: null
        // },

        // {
        //     name: "Jill",
        //     marks: [97, 87, 87],
        //     avg: null
        // },
        
        {
            name: "Bob",
            marks: [70, 80, 87],
            avg: null
        },

        {
            name: "Matt",
            marks: [99, 75, 87],
            avg: null
        },
        {
            name: "Kim",
            marks: [88, 69, 85],
            avg: null
        }
    ]

    let sum = 0;

    for(let i = 0; i<students.length ; i++)
    {
        sum = students[i].marks.reduce(function(a, b){return a + b;}, 0);
        students[i].avg = parseFloat((sum/(students[i].marks.length)).toFixed(1));
    }

    console.log(students);

    function compareAvgMarks(a, b)
    {
        if(b.avg < a.avg){return -1};
        if(b.avg > a.avg){return 1};
        return 0;
    }
    students.sort(compareAvgMarks);

    console.log(students);

    if (students[0].avg == students[1].avg)
    {
        let brightest = "";
        let i=0;
        while((students[i].avg == students[0].avg) && (i < students.length-1))
        {
            if(students[i+1].avg != students[0].avg)
            {
                brightest += "and " + students[i].name + " ";
                break;
            }
            brightest += students[i].name + ", ";
            i++;
        }
        brightest += "are the brightest students";
        console.log(brightest);

    }
    else
    {
        console.log(students[0].name + " is the brightest student.");
    }

}
  //**===**// QUESTION 3. END 