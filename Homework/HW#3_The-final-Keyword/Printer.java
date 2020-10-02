// Nusaiba Mahmood ITP HW#3
// Class: Printer.java

package com.company;
import java.lang.String;

public class Printer
{
    // ============ ATTRIBUTES ============ //
    private double inkLevel;
    private int pagesPrinted;
    private int pagesRemaining;
    private int pagesCapacity;
    private boolean duplex;

    // ============ CONSTRUCTORS ============ //

    //Default Constructor
    public Printer()
    {
        this.inkLevel = 100;
        this.pagesPrinted = 0;
        this.pagesRemaining = 250;
        this.pagesCapacity = 250;
        this.duplex = true;
    }

    public Printer(int pages)
    {
        this.pagesRemaining = pages;
        this.pagesCapacity = pages;

        this.inkLevel = 100;
        this.pagesPrinted = 0;
        this.duplex = true;
    }

    public Printer(int pages, boolean duplex)
    {
        this.pagesRemaining = pages;
        this.pagesCapacity = pages;
        this.duplex = duplex;

        this.inkLevel = 100;
        this.pagesPrinted = 0;
    }

    // ============ METHODS ============ //

    public void print()
    {
        if(this.inkLevel<=0)
        {
            System.out.println("Insufficient ink! Refill ink level.");
        }
        else if (this.pagesRemaining<=0)
        {
            System.out.println("Empty paper tray! Refill pages.");
        }
        else
        {
            this.pagesPrinted++;
            this.pagesRemaining--;
            this.inkLevel-= 0.5;

            System.out.println("Pages Printed: "+this.getPagesPrinted());
            System.out.println("Pages Remaining: "+this.getPagesRemaining()+"/"+this.getPagesCapacity());
            System.out.println("Current Ink Level: "+this.getInkLevel()+"%");
        }
    }

    public void print(int pages)
    {
        if(this.isDuplex() && pages % 2 == 0)
        {
            pages *= 0.5;
        }
        else if (this.isDuplex() && pages %2 != 0)
        {
            pages++;
            pages *= 0.5;
        }

        System.out.println("Pages to print: " + pages);

        if (pages <= this.pagesCapacity)
        {
            for(int i=0; i<pages; i++)
            {
                this.print();
                if(this.inkLevel == 0 || this.pagesRemaining == 0 && i!=pages)
                {
                    this.print();
                    this.setPagesPrinted(0);
                    break;
                }
            }

        }
        else
        {
            System.out.println("Printer capacity is: " + this.getPagesCapacity() + " Please print in batches.");
        }

        this.setPagesPrinted(0);
    }

    public void fillInk()
    {
        this.setInkLevel(100);
        System.out.println("[Ink filled to 100%]");
    }

    public void fillInk(double inkFillAmount)
    {
        this.setInkLevel(this.inkLevel + inkFillAmount);
        System.out.println("[Ink filled +"+inkFillAmount+"%]");
    }

    public void fillPages()
    {
        this.setPagesRemaining(this.pagesCapacity);
        System.out.println("[Pages filled.]");
    }

    public void fillPages(int pagesFillAmount)
    {
        this.setPagesRemaining((this.pagesRemaining + pagesFillAmount));
        System.out.println("[Pages filled to specified amount.]");
    }

    //Getters

    public double getInkLevel()
    {
        return this.inkLevel;
    }

    public int getPagesPrinted()
    {
        return this.pagesPrinted;
    }

    public int getPagesRemaining()
    {
        return this.pagesRemaining;
    }

    public int getPagesCapacity()
    {
        return this.pagesCapacity;
    }

    public boolean isDuplex()
    {
        return this.duplex;
    }

    //Setters

    public void setInkLevel(double inkLevel)
    {
        this.inkLevel = inkLevel;
        if(inkLevel >= 100){ this.inkLevel = 100; }
        if(inkLevel <= 0){ this.inkLevel = 0; }
        System.out.println("Current ink level: " + this.getInkLevel());
    }

    public void setPagesPrinted(int pagesPrinted)
    {
        if (pagesPrinted <= this.pagesRemaining && pagesPrinted >= 0)
        {
            this.pagesPrinted = pagesPrinted;
        }
        else
        {
            System.out.println("Invalid pagesPrinted value. Please enter an integer >= 0 & >= pagesRemaining");
        }
    }

    public void setPagesRemaining(int pagesRemaining)
    {
        this.pagesRemaining = pagesRemaining;
        if(pagesRemaining >= this.pagesCapacity){this.pagesRemaining = this.pagesCapacity;}
        if(pagesRemaining <= 0){this.pagesRemaining = 0;}
        System.out.println("Current pages remaining: " + this.getPagesRemaining());
    }

    public void setPagesCapacity(int pagesCapacity)
    {
        if (pagesCapacity > 0)
        {
            this.pagesCapacity = pagesCapacity;
        }
        else
        {
            System.out.println("Invalid pagesCapacity value. Please enter an integer > 0");
        }
    }

    public void setDuplex(boolean duplex)
    {
        this.duplex = duplex;
    }
}
