// PROBLEM: https://www.hackerrank.com/challenges/java-string-reverse/problem

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        
        Scanner sc=new Scanner(System.in);
        String A=sc.next();
        /* Enter your code here. Print output to STDOUT. */

        String B = new StringBuffer(A).reverse().toString();

        if (B.equals(A))
        {
            System.out.println("Yes");
        }
        else
        {
            System.out.println("No");
        }

        // int i = 0;
        // int j = A.length()-1;

        //madam 
        //abba
        //aba
        //java

        // while(A.charAt(i) == A.charAt(j) && i<j)
        // {
        //     i++;
        //     j--;
        // }

        // if(i>=j)
        // {
        //     System.out.println("Yes");
        // }
        // else
        // {
        //     System.out.println("No");
        // }
        
    }
}
