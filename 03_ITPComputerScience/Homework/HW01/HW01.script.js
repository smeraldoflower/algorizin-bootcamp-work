// Nusaiba Mahmood
// ITP CS HW 01
// HW01script.js

/*
1. Find out first first number value from an array 
Input : [‘h’,true,12,’test’] 
Output: 12

Note: in js Array can have any types of value [mixed], you need to check type
and return first number type value from your function. 
*/

var myArray = ['h', true, 12, 'test'];
console.log("1.  Array input: " + myArray);

//Solution 1
for (var i=0; i<myArray.length; i++)
{
    if(typeof(myArray[i]) == 'number')
    {
        console.log("    (Sol#1) The first number in this array is: "+myArray[i]);
        break;
    }
}

//Solution 2
var index = 0;
while(typeof(myArray[index])!='number')
{
    index++;
}
console.log("    (Sol#2) The first number in this array is: "+myArray[index]);


/*
2. Find out duplicate numbers from array 
Input [12,1,12,345] 
Output : 12

Note: We can access each value from the array and we can save their count
in another custom object ? or we can overload array indexes with value? 
*/

var array = [12, 1, 12, 345];
console.log("2.  Array input: " + array);

function findDuplicates(arr)
{
    let duplicates = [];
    let sorted_array = arr.slice().sort();
    
    for(var i = 0; i<(sorted_array.length-1); i++)
    {
        if(sorted_array[i+1] == sorted_array[i])
        {
            duplicates.push(sorted_array[i]);
        }
    }
    console.log("    Duplicates: " + duplicates);
}

findDuplicates(array);

/*
3. Find sum of all integer value from array 
input : [12,124343,343,34545,4545]
*/

var intSum = [12, 124343, 343, 34545, 4545];
var sum = 0;
console.log("3.  Array input: " + intSum);


for(var i = 0; i<intSum.length; i++)
{
    sum+=intSum[i];
}
console.log("    Sum of all integer values is: "+ sum);


/* 
4. Find missing numbers from a sorted array [1,2,3,6,7,8,9,10]
*/

var sorted = [1, 2, 3, 6, 7, 8, 9, 10];
console.log("4.  Array input: " + sorted);

function missingNo(arr)
{
    let first = arr[0];
    let last = arr[arr.length-1];
    var missing = [];

    while(first != last)
    {
        if(!arr.includes(first, 0))
        {
            missing.push(first);
        }
        first++;
    }

    console.log("    Missing numbers from sorted array: " + missing);
}

missingNo(sorted);


