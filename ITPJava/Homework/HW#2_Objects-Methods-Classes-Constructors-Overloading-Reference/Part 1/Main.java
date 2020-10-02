// Nusaiba Mahmood ITP HW#2 pt.1

package com.company;

public class Main
{
    public static void main(String[] args)
    {
        //Creating integer arrays
        int[] array1 = new int[]{0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
        int[] array2 = new int[10];

        //Assigning array1 as the value of array2
        array2 = array1;

        //Printing out the current values in array1
        System.out.print("Array 1: ");
        for(int i=0; i<array1.length; i++)
        {
            System.out.print("["+ array1[i] + "]");
        }

        //Printing out the current values in array2 for comparison
        System.out.println("");
        System.out.print("Array 2: ");
        for(int i=0; i<array2.length; i++)
        {
            System.out.print("["+ array2[i] + "]");
        }

        //Changing the value of the 3rd element in array2
        array2[2] = 7997;
        System.out.println("");
        System.out.println("=====================================================");
        System.out.println("Changed value of 3rd element in Array 2");
        System.out.println("=====================================================");

        //Printing out the current values in array2
        System.out.print("Array 2: ");
        for(int i=0; i<array2.length; i++)
        {
            System.out.print("["+ array2[i] + "]");
        }

        //Printing out the current values in array1 for comparison
        System.out.println("");
        System.out.print("Array 1: ");
        for(int i=0; i<array1.length; i++)
        {
            System.out.print("["+ array1[i] + "]");
        }

        //What happens: Changing the value of the 3rd element in Array 2 also changes the same value in Array 1.
        System.out.println("");
        System.out.println("=====================================================");
        System.out.println("What happens: ");
        System.out.println("-----------------------------------------------------");
        System.out.println("Changing the value of the 3rd element");
        System.out.println("in Array 2 also changes the same value in Array 1.");

        /*Explanation: When assigning array1 as the value of array2 it simply copies the reference of array1 making
        both array1 and array2 refer to the same object. So when the value of an element is updated, it is updated at
        the reference object, and so both array1 and array2 "change" because they point to the same array object.
        If we wanted to copy the values in array1 into array2, we could use array2 = array1.clone();
         */
        System.out.println("-----------------------------------------------------");
        System.out.println("Explanation: ");
        System.out.println("-----------------------------------------------------");
        System.out.println("When assigning array1 as the value of array2 it");
        System.out.println("simply copies the references of array1 making both");
        System.out.println("array1 and array2 refer to the same object. So when");
        System.out.println("the value of an element is updated, it is updated at");
        System.out.println("the reference object, and so both array1 and array2");
        System.out.println("\"change\" because they point to the same array object.");
        System.out.println("To simply copy the values in array1 into array2,");
        System.out.println("we could use array2 = array1.clone();");
        System.out.println("=====================================================");
    }
}
