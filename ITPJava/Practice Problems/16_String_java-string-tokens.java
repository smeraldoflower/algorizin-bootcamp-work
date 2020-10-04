// PROBLEM: https://www.hackerrank.com/challenges/java-string-tokens/problem

import java.io.*;
import java.util.*;

public class Solution 
{
    public static void main(String[] args)
    {
        Scanner scan = new Scanner(System.in);

        if(!scan.hasNext())
        {
            System.out.print(0);
            return;
        }
        
        String s = scan.nextLine();

       // Write your code here.
        scan.close();

        String regexDelims = "[ !,?.\\_'@]+";
        String[] tokensArray = s.trim().split(regexDelims);

        if (tokensArray.length>400000 || tokensArray.length< 1 || tokensArray == null)
        {
            System.out.println("0");
        }
        else
        {
            System.out.println(tokensArray.length);
        }

        for(int i=0; i<tokensArray.length; i++)
        {
            System.out.println(tokensArray[i]);
        }
        
    }
}
