// Nusaiba Mahmood
// ITJS HW #5
// HW05script.js

/**
 * 2. Suppose that you're working in a small town administration, and you're in charge of two town elements:
 * 
 *      - Parks
 *      - Streets
 * 
 * It's a very small town, so right now there are only 3 parks and 4 streets.
 * All parks and streets have a name and a build year.
 * 
 * At an end-of-year meeting, your boss wants a final report with the following:
 * 
 *      - Tree density of each park in the town (formula: number of trees/park area)
 *      - Average age of each town's park (formula: sum of all ages/number of parks)
 *      - The name of the park that has more than 1000 trees
 *      - Total and average length of the town's streets
 *      - Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
 * 
 * All the report data should be printed to the console. 
 * No need to use DOM manipulation, all information will be hardcoded.
 * 
 * NOTE: 
 * You’re advised to use let/const, arrow functions and all new things taught in the last class, as much as you can.
 * But for now, you ​can’t ​use ES6 classes, those will be taught late
 */

function TownElement(name, build_year)
{
    this.name       = name;
    this.build_year = build_year;
    //this.Parks      = [];
    //this.Streets    = [];
}

// PARKS

function Park(name, build_year, number_of_trees, park_area)
{
    TownElement.call(this, name, build_year);

    this.number_of_trees    = number_of_trees;
    this.park_area          = park_area;
    this.park_age           = parseInt(new Date().getFullYear()) - this.build_year;
}

Park.prototype = Object.create(TownElement.prototype);
Park.prototype.constructor = Park;

Park.prototype.getTreeDensity = function()
{
    let tree_density = Math.floor((this.number_of_trees / this.park_area));
    console.log(`The tree density of ${this.name} is ${tree_density} trees per sq unit.`);
}

// Creating Parks
park1 = new Park('Mamzar Park', 2004, 1001, 200);
park2 = new Park('Creek Park', 2005, 500, 100);
park3 = new Park('Zabeel Park', 2007, 700, 300);
const myParks = [park1, park2, park3];


// Parks Report

// - Tree density of each park in the town (formula: number of trees/park area)
park1.getTreeDensity();
park2.getTreeDensity();
park3.getTreeDensity();

// - Average age of each town's park (formula: sum of all ages/number of parks)
let averageParkAge = function(parks_array)
{
    let number_of_parks = parks_array.length;
    let park_age_sum = 0;

    for(i=0; i<number_of_parks; i++)
    {
        park_age_sum += parks_array[i].park_age;
    }

    let avg_age = ( park_age_sum / (number_of_parks) );
    console.log(`The average age of parks for this town is ${avg_age.toFixed(1)} years.`);
};

averageParkAge(myParks);

// - The name of the park that has more than 1000 trees
let moreThanThousand = function(parks_array)
{
    for(i=0; i<parks_array.length; i++)
    {
        if(parks_array[i].number_of_trees > 1000)
        {
            console.log(`${parks_array[i].name} has ${parks_array[i].number_of_trees} trees.`);
        }
    }
};

moreThanThousand(myParks);

// STREETS
// Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
function Street(name, build_year, street_length, street_size = 'normal')
{
    TownElement.call(this, name, build_year);

    this.street_length = street_length;
    this.street_size = street_size;
}

Street.prototype = Object.create(TownElement.prototype);
Street.prototype.constructor = Street;

Street.prototype.getSizeClassification = function()
{
    console.log(`${this.name} is classified as a ${this.street_size} street.`);
}

// Creating Streets
street1 = new Street('King Street', 2003, 1000, 'big');
street2 = new Street('Queen Street', 2004, 900);
street3 = new Street('Jack Street', 2005, 700, 'small');
street4 = new Street('Ace Street', 2007, 2000, 'huge' );
const myStreets = [street1, street2, street3, street4];

// Streets Report

// - Total and average length of the town's streets
let totalStreetLength = function(streets_array)
{
    let sum = 0;
    for(i=0; i<streets_array.length; i++)
    {
        sum+= streets_array[i].street_length;
    }
    console.log(`The total street length for this town is ${sum} metres.`);
    
    return sum;
};
totalStreetLength(myStreets);

let averageStreetLength = function(streets_array)
{
    let avg = ( totalStreetLength(streets_array) / streets_array.length );
    console.log(`The average street length for this town is ${avg} metres.`);
};
averageStreetLength(myStreets);

// - Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
street1.getSizeClassification();
street2.getSizeClassification();
street3.getSizeClassification();
street4.getSizeClassification();