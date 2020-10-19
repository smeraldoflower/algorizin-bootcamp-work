// Nusaiba Mahmood ITP HW#5
// Concrete Shape Subclass: Rectangle

package com.company;

class Rectangle extends Shape implements Resizable
{
    double width;
    double height;

    Rectangle (double w, double h)
    {
        /* HW#5 Part 2: What is constructor chaining in JAVA?

           According to geeksforgeeks: "Constructor chaining is the process of calling
           one constructor from another constructor with respect to current object."

           Below are 2 examples of constructor chaining. Within the same class this()
           keyword is use.
           Calling a constructor from the base class Shape requires the use of the
           super() keyword.
        */

        super(4);
        this.width = w;
        this.height = h;
    }

    //Overridden abstract method: calculates and returns area of rectangle
    @Override
    double getArea()
    {
        return width*height;
    }

    //Overridden abstract method: calculates and returns perimeter of rectangle
    @Override
    double getPerimeter()
    {
        double p = 2*(width+height);
        return p;
    }

    //Overridden interface method: resizes the rectangles dimensions by factor x
    @Override
    public void resize(double x)
    {
        this.width*=x;
        this.height*=x;
    }
}
