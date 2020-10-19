// Nusaiba Mahmood
// ITPJS WK 01 HW 01
// myInformation.js

var info = 
{
    name: "Nusaiba",
    age: 23,

    education:
    [
        {
            degree: "B.Sc in Computer Science",
            institution: "Bradley University",
            year: 2020,
        },
        {
            degree: "B.A in French",
            institution: "Bradley University",
            year: 2020,
        }

    ],

    address:
    {
        present: 
        {
            street: "KINGSVIEW DR",
            city: "MOUNT PLEASANT",
        },

        permanent:
        {
            street: "KINGSVIEW DR",
            city: "MOUNT PLEASANT",
        }
    },

    skills:
    {
        technical:["Java", "JavaScript", "C++"],
        soft:["Communication", "Writing", "Adaptability", "Flexibility", "Problem-Solving",],
    },

    experience:
    [
        {
            company: "Algorizin",
            role: "Teaching Assistant, Computer Science",
            activeYear: 1,
            currentlyWorking: true,
        },
        {
            company: "Bradley University",
            role: "Student Assistant - Assistive Technologies",
            activeYear: 2,
            currentlyWorking: false,
        },
    ]

}

console.log("Hi, my name is " + info.name + ". I am " + info.age + " years old.");
console.log("My present address is " + info.address.present.street + ", " + info.address.present.city + ".");
console.log("I took my " + info.education[0].degree + " from " + info.education[0].institution + ".");
console.log("I am currently working in " + info.experience[0].company + " as a " + info.experience[0].role + ".");

/*
Hi, my name is (name). I am (age) years old.
My present address is (present address street), (present address city).
I took my (last degree) from (last institution).
I am currently working in (company name) as a (role).
*/