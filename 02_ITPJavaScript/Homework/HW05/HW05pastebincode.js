// Nusaiba Mahmood
// ITJS HW #5
// HW05pastebincode.js

/**
 * 1. Based on your reading, look at the code from previous class below (fixed code error of prototype chaining):
 */

// ======= Function Prototype & Inheritance ========
function Animal(type, name) {
    // PROPERTIES
    this.type = type;
    this.name = name;
}

// To make the METHODS shared, we assign it directly to Prototype
// this makes the METHODS re-usable across different calls without using extra resource
Animal.prototype.makeSound = function () {
    console.log('Default animal sound');
};

Animal.prototype.play = function () {
    console.log('The animal is playing');
};

Animal.prototype.eat = function () {
    console.log('The animal is eating');
};

// Now let's create some dog objects
function Dog(name) {
    Animal.call(this, 'Dog', name);
    // At this point, only the PROPERTIES of Animal has been inherited, not it's methods
}

// To inherit METHODS of Animal, we specifiy the prototype accordingly
Dog.prototype = Object.create(Animal.prototype);

/* Currently the CONSTRUCTOR of Dog is pointing to Animal Object. It's
because we have assigned the Animal.prototype to the Dog. To make the Dog
point to it's own constructor (which should be the case), we have to change
the reference
*/
Dog.prototype.constructor = Dog;

Dog.prototype.makeSound = function () {
    // method overriding
    console.log(`The dog named ${this.name} is barking`);
};

function Bird(name) {
    Animal.call(this, 'Bird', name);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Bird.prototype.makeSound = function () {
    console.log(`The bird named ${this.name} is chirping`);
};

// Animal -> Grandparent
// Dog -> immediate parent
function Shiba(name) {
    Dog.call(this, name);
    this.breed = 'Shiba';
}

// assign the parent
// prototype = Dog
Shiba.prototype = Object.create(Dog.prototype);
// also update constructor
Shiba.prototype.constructor = Shiba;

dog = new Dog('Charlie');
dog.makeSound();
console.log(dog);

bird = new Bird('Roko');
bird.makeSound();
console.log(bird);

dog2 = new Shiba('John');
dog2.makeSound();
console.log(dog2);