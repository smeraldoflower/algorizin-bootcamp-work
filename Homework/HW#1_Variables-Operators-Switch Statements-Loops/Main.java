//Nusaiba Mahmood - ITP HW#1 pt 1

package com.company;
import java.util.Scanner;

public class Main
{

    public static void main(String[] args)
    {
        Scanner numbers = new Scanner (System.in);          //for number input
        Scanner operator = new Scanner (System.in);         //for operator input
        Scanner again = new Scanner (System.in);            //for y/n input to repeat do-while loop
        Double a;                                           //first input value
        Double b;                                           //second input value
        Double c = null;                                    //result value
        String op;                                          //operator input value
        String moreop;                                      //more operations? y/n responses

        do
        {
            System.out.println("Please enter the numbers to perform an operation.");

            a = numbers.nextDouble();
            System.out.println("First Value = " + a);

            b = numbers.nextDouble();
            System.out.println("Second Value = " + b);

            System.out.println("Please enter the operation (+,-,*,/,!) that you want to perform.");

            op = operator.nextLine();
            System.out.println("Operation: "+op);

            if(op.equals("+"))          //Addition
            {
                c = a+b;
            }
            else if(op.equals("-"))     //Subtraction
            {
                c = a-b;
            }
            else if(op.equals("*"))     //Multiplication
            {
                c = a*b;
            }
            else if(op.equals("/"))     //Division
            {
                c = a/b;
            }
            else                        //Invalid Operator Entered
            {
                System.out.println("Could not perform the operation. Please try again with a valid operator.");
                op = null;
                c = null;
            }

            //Result
            System.out.println("Answer: "+a+" "+op+" "+b+" = "+ c);
            System.out.println("Perform more operations? (y/n)");
            moreop = again.nextLine();
        }
        while (moreop.equals("y"));
    }
}

