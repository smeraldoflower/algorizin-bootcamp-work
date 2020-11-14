// Nusaiba Mahmood
// ITP JS HW02
// HW02script.js

/**
 * 1. Write a program that takes as input a number N, and outputs the following pattern (where N= 5):
 *      *
 *      **
 *      ***
 *      ****
 *      *****
 * Similarly, if N = 3, it would print:
 *      *
 *      **
 *      ***
 * So, N refers to line numbers for the pattern.
 */

{
    let n = parseInt(prompt('Enter n', 5));

    let i = 0;
    let stars = '';

    while(!isNaN(n) && i!=n)
    {
        stars+='*';
        console.log(stars);
        i++;
    }
}


/**
 * 2. Write a function to implement Binary Search in JavaScript.
 * It would take two arguments array​ and ​element​,
 * if the element is found in array, 
 * it would return the index 
 * otherwise -1
 */

{
    function binarySearch(array, element)
    {
        let sorted_array = array.sort(); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
        let min_index = 0;
        let max_index = sorted_array.length - 1;
        let mid_index;

        while(max_index >= min_index)
        {
            mid_index = Math.floor((min_index + max_index) * 0.5);

            if (sorted_array[mid_index] === element) { return mid_index; }
            else if (sorted_array[mid_index] < element) { min_index = mid_index +1; }
            else { max_index = mid_index -1; }
        }
        return -1;
    }

    let arr = [2, 8, 4, 9, 5, 7, 1, 3, 6];
    let ele = 7;

    console.log(binarySearch(arr, 3))
    console.log(binarySearch(arr, 7));
    console.log(binarySearch(arr, 5));
    console.log(binarySearch(arr, 10));
    console.log(binarySearch(arr, 0));
}


/**
 * 3. Write a function to find out student’s obtained grades based on marks.
 * Your program would have two variables ​student names​ and ​marks​,
 * where array positions in marks correspond to the mark received by the student.
 * For example,
 * 
 *      student_names = [‘alice’, ‘bob’]
 *      marks = [85, 75]
 * 
 * The output of your program in this case would be:
 * 
 *      Alice got A+
 *      Bob got A
 * 
 */

/**
 * A+   >=85
 * A    >=75
 * B    >=65
 * C    >=55
 * D    < 55
 */
{
    let student_names = ['alice', 'bob'];
    let marks = [85, 75];

    let letter_grades = marks.map((item) =>
        {
            if (item >=85){item = 'A+';}
            else if (item >=75){item = 'A';}
            else if (item >=65){item = 'B';}
            else if (item >=55){item = 'C';}
            else {item = 'D';}
            return item;
        }
    );


    student_names.forEach( (item) =>
        {
            console.log
            (`${item.charAt(0).toUpperCase()+item.slice(1,item.length)} got ${letter_grades.pop()}`);
        }
    );
}