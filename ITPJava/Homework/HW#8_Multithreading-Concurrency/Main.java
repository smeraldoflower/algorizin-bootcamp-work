// Nusaiba Mahmood ITP HW#8
// Main

package com.company;

public class Main
{
    public static void main(String[] args)
    {
        System.out.println("\u001B[32m STARTING: \u001B[0m"+Thread.currentThread().getName());
        // Thread 1 - extend from the Thread class - 4 times table
        Thread t1 = new Four("Thread1");
        t1.start();
        try
        {
            t1.sleep(1000);
        }
        catch (InterruptedException e)
        {
            e.printStackTrace();
        }
        // Thread 2 - use an anonymous subclass of Thread - 5 times table
        Thread t2 = new Thread()
        {
            public void run()
            {
                setName("Thread2");

                System.out.println("\u001B[32m STARTING: \u001B[0m"+Thread.currentThread().getName());
                for(int i=0; i<=12; i++)
                {
                    System.out.println(Thread.currentThread().getName() + " [5*"+i+"] = "+5*i);
                }
                System.out.println("\u001B[31m ENDING: \u001B[0m"+Thread.currentThread().getName());

            }
        };
        t2.start();
        try
        {
            t2.sleep(1000);
        }
        catch (InterruptedException e)
        {
            e.printStackTrace();
        }

        // Thread 3 - implement the Runnable interface - 6 times table
        Six sixRunObj = new Six();
        Thread t3 = new Thread(sixRunObj,"Thread3");
        t3.start();
        try
        {
            t3.sleep(1000);
        }
        catch (InterruptedException e)
        {
            e.printStackTrace();
        }

        // Thread 4 - use an anonymous implementation of Runnable - 7 times table
        Runnable runner = new Runnable()
        {
            @Override
            public void run()
            {
                System.out.println("\u001B[32m STARTING: \u001B[0m"+Thread.currentThread().getName());
                for(int i=0; i<=12; i++)
                {
                    System.out.println(Thread.currentThread().getName() + " [7*"+i+"] = "+7*i);
                }
                System.out.println("\u001B[31m ENDING: \u001B[0m"+Thread.currentThread().getName());

            }
        };
        Thread t4 = new Thread(runner, "Thread4");
        t4.start();
        try
        {
            t4.sleep(1000);
        }
        catch (InterruptedException e)
        {
            e.printStackTrace();
        }

        System.out.println("\u001B[31m ENDING: \u001B[0m"+Thread.currentThread().getName());
    }
}

class Four extends Thread
{
    public Four(String name)
    {
        super(name);
    }

    @Override
    public void run()
    {
        System.out.println("\u001B[32m STARTING: \u001B[0m"+Thread.currentThread().getName());
        for(int i=0; i<=12; i++)
        {
            System.out.println(Thread.currentThread().getName() + " [4*"+i+"] = "+4*i);
        }
        System.out.println("\u001B[31m ENDING: \u001B[0m"+Thread.currentThread().getName());

//        try
//        {
//            Thread.sleep(30000);
//        }
//        catch(InterruptedException e)
//        {
//            e.printStackTrace();
//        }
    }
}

class Six implements Runnable
{
    @Override
    public void run()
    {
        System.out.println("\u001B[32m STARTING: \u001B[0m"+Thread.currentThread().getName());
        for(int i=0; i<=12; i++)
        {
            System.out.println(Thread.currentThread().getName() + " [6*"+i+"] = "+6*i);
        }
        System.out.println("\u001B[31m ENDING: \u001B[0m"+Thread.currentThread().getName());

//        try
//        {
//            Thread.sleep(30000);
//        }
//        catch(InterruptedException e)
//        {
//            e.printStackTrace();
//        }
    }
}