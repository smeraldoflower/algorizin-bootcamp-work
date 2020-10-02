// Nusaiba Mahmood ITP HW#5
// Abstract Class : Shape

package com.company;

abstract class Shape
{
    //Data Members
    int numSides;

    //Constructor
    public Shape (int n)
    {
        this.numSides = n;
    }

    //Concrete Getter Method
    int getNumSides()
    {
        return numSides;
    }

    //Abstract Methods
    abstract double getArea();
    abstract double getPerimeter();

}
