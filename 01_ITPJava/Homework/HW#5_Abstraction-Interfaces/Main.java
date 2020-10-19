// Nusaiba Mahmood ITP HW#5
// Main

package com.company;

public class Main
{
    public static void main(String[] args)
    {
        Shape rectangle = new Rectangle (2,3);
        Shape rtTriangle = new RtTriangle(3, 4);

        System.out.println("Rectangle Area: "+rectangle.getArea());
        System.out.println("Rectangle Perimeter: "+rectangle.getPerimeter());

        System.out.println();
        ((Rectangle) rectangle).resize(2);

        System.out.println("Rectangle Area: "+rectangle.getArea());
        System.out.println("Rectangle Perimeter: "+rectangle.getPerimeter());
    }
}
