// Nusaiba Mahmood ITP HW#2 pt.2
// Animal.java

package com.company;
import java.lang.String;

public class Animal
{
    // ============ ATTRIBUTES ============ //
    private String _name;
    private int _numberOfLegs;
    private String _animalSound;
    private String _animalFood;
    private String _habitat;
    private boolean _vertebrate;
    private String _animalPhylum;
    private String _animalClass;

    // ============ CONSTRUCTORS ============ //

    // Default Constructor
    public Animal()
    {
        _name = "Animal X";
        _numberOfLegs = 0;
        _animalSound = "animal noises";
        _animalFood = "animal food";
        _habitat = "habitat";
        _vertebrate = false;
        _animalPhylum = "phylum";
        _animalClass = "class";
    }

    // Overloaded Constructors
    public Animal(String name, int numberOfLegs, String animalSound, String animalFood)
    {
        _name = name;
        _numberOfLegs = numberOfLegs;
        _animalSound = animalSound;
        _animalFood = animalFood;
        _habitat = "habitat";
        _vertebrate = false;
        _animalPhylum = "phylum";
        _animalClass = "class";
    }

    public Animal(String name, int numberOfLegs, String animalSound, String animalFood,
                  String habitat, boolean vertebrate, String animalPhylum, String animalClass)
    {
        _name = name;
        _numberOfLegs = numberOfLegs;
        _animalSound = animalSound;
        _animalFood = animalFood;
        _habitat = habitat;
        _vertebrate = vertebrate;
        _animalPhylum = animalPhylum;
        _animalClass = animalClass;
    }

    // ============ METHODS ============ //

    public void makeSound(int x)
    {
        for(int i = 0; i<x; i++)
        {
            System.out.print(_animalSound + "! ");
        }
        System.out.println("");
    }

    public void eat()
    {
        System.out.println("The " + _name + " has eaten some " + _animalFood + ".");
        System.out.println("");
    }

    //Accessors

    public String getName()
    {
        return _name;
    }

    public int getNumberOfLegs()
    {
        return _numberOfLegs;
    }

    public String getHabitat()
    {
        return _habitat;
    }

    public boolean isVertebrate()
    {
        return _vertebrate;
    }

    public String getAnimalPhylum()
    {
        return _animalPhylum;
    }

    public String getAnimalClass()
    {
        return _animalClass;
    }



}
