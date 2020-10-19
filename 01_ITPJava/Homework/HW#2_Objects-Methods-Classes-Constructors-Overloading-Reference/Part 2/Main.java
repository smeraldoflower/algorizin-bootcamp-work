// Nusaiba Mahmood ITP HW#2 pt.2
// Main.java

package com.company;


public class Main
{
    public static void main(String[] args)
    {
        Animal lion = new Animal("lion", 4, "ROAR", "meat");
        Animal deer = new Animal("deer", 4, "BLEAT", "grass");
        Animal bird = new Animal("kookaburra", 2, "OOOOOOHHOOHAHAHAHAHAHAWAAHAHAHA","snakes");

        lion.makeSound(5);
        lion.eat();

        deer.makeSound(3);
        deer.eat();

        bird.makeSound(2);
        bird.eat();
    }
}
