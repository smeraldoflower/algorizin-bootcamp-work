// Nusaiba Mahmood ITP HW#5
// Concrete Shape Subclass: Circle

package com.company;

public class Circle extends Shape implements Resizable
{
    double radius;

    public Circle(double r)
    {
        super(0);
        this.radius = r;
    }

    //Overridden abstract method: calculates and returns the area of the circle.
    @Override
    double getArea()
    {
        double a = Math.PI * this.radius * this.radius;
        return a;
    }

    /* Overridden abstract method: calculates and returns the perimeter
    (circumference) of the circle */
    @Override
    double getPerimeter()
    {
        double p = 2 * Math.PI * this.radius;
        return p;
    }

    //Overridden interface method: resizes the circle radius by factor x
    @Override
    public void resize(double x)
    {
        this.radius*= x;
    }
}
