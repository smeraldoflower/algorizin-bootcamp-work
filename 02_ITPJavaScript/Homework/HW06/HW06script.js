// Nusaiba Mahmood
// ITJS HW #6
// HW06script.js

/**
 * 1. Look at the following code. What would be the output of this program? 
 * Is there any problem with the code? If so, why did it appear and how to fix it?
 * Try to answer the question without running code first.
 */

/**
 * ANS: 
 * The problem with this code is that the arrow function declared inside the setTimeout function
 * is trying to access properties of myObj object with the THIS keyword.
 * But for this arrow function the THIS keyword represents the setTimeout function where type and color aren't defined.
 * 
 * A possible way to fix it:
 * Use an arrow function but call the properties without this keyword. (myObj.type, myObj.color)
 */

var myObj = {
    type: '​ball​',
    color: '​green​',


    introduce: () => {
        // setTimeout( () => {
        //     console.log(`​The ​${this.type}​ is of color ​${this.color}`);
        // }, 1000 );

        //FIX
        setTimeout( () => { console.log(`​The ​${myObj.type}​ is of color ​${myObj.color}`); } , 1000 );
    },
};

myObj.introduce();

/**
 * 2.
 * Using JavaScript, build a HashMap data structure. 
 * 
 * A HashMap can store key-value pairs.
 * It has operations like add(), get() and remove().
 * The add() and get() operation should be in O(1) time.
 * 
 * NOTE:​ You have to create a Class named HashMap which will handle all hashmap related functions.
 * Use the latest ES6 Class syntax.
 * 
 * HINT:​ Javascript Objects can be used as key-value holders.
 */

class HashMap
{
    constructor()
    {
        // {key1 : value, key2: val, key3: another val, ....}
    };
    
    add(k, v)
    {
        if (this.hasOwnProperty(`${k}`))
        { 
            console.log(`Key: ${k} already exists in the current hashmap. Please select a different key.`);
            return;
        }
        this[`${k}`] = v
    };

    get(k)
    {
        if (!this.hasOwnProperty(`${k}`))
        { 
            console.log(`Key: ${k} does not exist in the current hashmap. Please select a different key.`);
            return;
        }

        return this[`${k}`];
    }

    remove(k)
    {
        if (!this.hasOwnProperty(`${k}`))
        { 
            console.log(`Key: ${k} does not exist in the current hashmap. Please select a different key.`);
            return;
        }

        delete this[`${k}`];
    }
}

myHashMap = new HashMap();

myHashMap.add('key1', 'value1');
myHashMap.add('key2', 'value2');

console.log(myHashMap); //Further testing done via web browser console. It works (Y)

