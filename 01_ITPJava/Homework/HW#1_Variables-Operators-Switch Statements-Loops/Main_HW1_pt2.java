//Nusaiba Mahmood ITP - HW#1 pt 2

package com.company;
import java.util.Scanner;

public class Main
{
    public static void main(String[] args)
    {
	    Scanner userInput = new Scanner(System.in);
	    Scanner rpt = new Scanner(System.in);
	    long num;
	    String repeat = null;

	    do
        {
            System.out.println("Please enter an integer number (0-20) to calculate its factorial.");
            num = userInput.nextLong();
            System.out.println("n = "+num);

            System.out.println(num+"! = "+factorial(num));
            System.out.println("Would you like to calculate another factorial? (y/n)");

            repeat = rpt.nextLine();
        }
	    while(repeat.equals("y"));

	    userInput.close();
	    rpt.close();

    }

    /*
    Recursive method calculates and returns factorials 0-20
    Takes single long input
    Returns long value
     */
    public static long factorial(long n)     // n! = n * (n-1)!  // 0! = 1
    {
        if(n==1 || n==0)
        {
            return 1;
        }
        else
        {
            return (n * factorial(n-1));
        }
    }

}
