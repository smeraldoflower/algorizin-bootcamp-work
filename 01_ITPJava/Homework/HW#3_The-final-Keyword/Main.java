// Nusaiba Mahmood ITP HW#3 pt 2 Printer
// Main

package com.company;

public class Main
{
    public static void main(String[] args)
    {
        Printer myPrinter = new Printer();
        System.out.println("Page Capacity: " + myPrinter.getPagesCapacity());
        System.out.println("Pages Remaining: " + myPrinter.getPagesRemaining());
        System.out.println("Ink Level: " + myPrinter.getInkLevel() + "%");

        myPrinter.setDuplex(false);
        myPrinter.print(250);
        myPrinter.fillInk();
        myPrinter.print(55);

        myPrinter.fillPages();
        //myPrinter.setPagesRemaining(255);
        //System.out.println(myPrinter.getPagesRemaining());
        myPrinter.print(5);
    }
}
