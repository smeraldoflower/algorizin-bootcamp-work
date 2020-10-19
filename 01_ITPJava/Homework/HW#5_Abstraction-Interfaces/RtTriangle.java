// Nusaiba Mahmood ITP HW#5
// Concrete Shape Subclass: RtTriangle

package com.company;
import static java.lang.Math.sqrt;

public class RtTriangle extends Shape
{
    double width;
    double height;

    RtTriangle (double w, double h)
    {
        super(3);
        this.width = w;
        this.height = h;
    }

    //Overridden abstract method: calculates and returns area of triangle
    @Override
    double getArea()
    {
        return 0.5*width*height;
    }

    //Overridden abstract method: calculates and returns perimeter of triangle
    @Override
    double getPerimeter()
    {
        double p = width + height + sqrt((width*width)+(height*height));
        return p;
    }
}
