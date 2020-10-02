// Nusaiba Mahmood ITP HW#6
// Main

package com.company;

import java.util.*;

public class Main
{
    public static void main(String[] args)
    {
        // Creating Data Structure Objects
        LinkedList<String> myLinkedList = new LinkedList<>();
        ArrayList<String> myArrayList = new ArrayList<>();
        PriorityQueue<String> myPriorityQueue = new PriorityQueue<>();
        HashSet<String> myHashSet = new HashSet<>();
        LinkedHashSet<String> myLinkedHashSet = new LinkedHashSet<>();
        TreeSet<String> myTreeSet = new TreeSet<>();
        HashMap<String, String> myHashMap = new HashMap<>();
        LinkedHashMap<String, String> myLinkedHashMap = new LinkedHashMap<>();
        TreeMap<String, String> myTreeMap = new TreeMap<>();


        // Adding 6 new elements to the data structures
        for (int i = 0; i < 6; i++)
        {
            myLinkedList.add(String.valueOf(i));
            myArrayList.add(String.valueOf(i));
            myPriorityQueue.add(String.valueOf(i));
            myHashSet.add(String.valueOf(i));
            myLinkedHashSet.add(String.valueOf(i));
            myTreeSet.add(String.valueOf(i));
            myHashMap.put(String.valueOf(i+1), String.valueOf(i));
            myLinkedHashMap.put(String.valueOf(i+1), String.valueOf(i));
            myTreeMap.put(String.valueOf(i+1), String.valueOf(i));
        }

        System.out.println("// Added 6 elements");

        System.out.println("Linked List: " + myLinkedList);
        System.out.println("Array List: " + myArrayList);
        System.out.println("Priority Queue: " + myPriorityQueue);
        System.out.println("Hash Set: " + myHashSet);
        System.out.println("Linked Hash Set: " + myLinkedHashSet);
        System.out.println("Tree Set: " + myTreeSet);
        System.out.println("Hashmap (key=value): " + myHashMap);
        System.out.println("Linked Hashmap (key=value): " + myLinkedHashMap);
        System.out.println("Treemap (key=value): " + myTreeMap);


        // Removing 4th element
        System.out.println();

        myLinkedList.remove(3);
        myArrayList.remove(3);

        int i = 0;

        Iterator pQ = myPriorityQueue.iterator();
        while(pQ.hasNext() && i!=4)
        {
            if (i == 3){myPriorityQueue.remove(pQ.next()); break;}
            pQ.next();
            i++;
        }

        i=0;
        Iterator hS = myHashSet.iterator();
        while(hS.hasNext() && i!=4)
        {
            if (i == 3){myHashSet.remove(hS.next()); break;}
            hS.next();
            i++;
        }

        i=0;
        Iterator lHS = myLinkedHashSet.iterator();
        while(hS.hasNext() && i!=4)
        {
            if (i == 3){myLinkedHashSet.remove(lHS.next()); break;}
            lHS.next();
            i++;
        }

        i=0;
        Iterator tS= myTreeSet.iterator();
        while(tS.hasNext() && i!=4)
        {
            if (i == 3){myTreeSet.remove(tS.next()); break;}
            tS.next();
            i++;
        }

        myHashMap.remove(String.valueOf(4));
        myLinkedHashMap.remove(String.valueOf(4));
        myTreeMap.remove(String.valueOf(4));

        System.out.println("// Removed 4th element");

        System.out.println("Linked List: " + myLinkedList);
        System.out.println("Array List: " + myArrayList);
        System.out.println("Priority Queue: " + myPriorityQueue);
        System.out.println("Hash Set: " + myHashSet);
        System.out.println("Linked Hash Set: " + myLinkedHashSet);
        System.out.println("Tree Set: " + myTreeSet);
        System.out.println("Hashmap (key=value): " + myHashMap);
        System.out.println("Linked Hashmap (key=value): " + myLinkedHashMap);
        System.out.println("Treemap (key=value): " + myTreeMap);


        // Searching for particular element
        System.out.println();

        String str = "4";
        //str = "10";
        System.out.println("// Searching for " + str);

        if (myLinkedList.contains(str))
        {
            System.out.println("Linked List: " + myLinkedList);
            System.out.println("Linked List contains: " + str + " at index: " + myLinkedList.indexOf(str));
        }
        else
        {
            System.out.println("Element not found in Linked List.");
        }

        if (myArrayList.contains(str))
        {
            System.out.println("Array List: " + myArrayList);
            System.out.println("Array List contains: " + str + " at index: " + myArrayList.indexOf(str));
        }
        else
        {
            System.out.println("Element not found in Array List.");
        }

        if (myPriorityQueue.contains(str))
        {
            System.out.println("Priority Queue: " + myPriorityQueue);
            System.out.println("Priority Queue contains: " + str);
        }
        else
        {
            System.out.println("Element not found in Priority Queue.");
        }

        if (myHashSet.contains(str))
        {
            System.out.println("Hash Set: " + myHashSet);
            System.out.println("Hash Set contains: " + str);
        }
        else
        {
            System.out.println("Element not found in Hash Set.");
        }

        if (myLinkedHashSet.contains(str))
        {
            System.out.println("Linked Hash Set: " + myHashSet);
            System.out.println("Linked Hash Set contains: " + str);
        }
        else
        {
            System.out.println("Element not found in Linked Hash Set.");
        }

        if (myTreeSet.contains(str))
        {
            System.out.println("Tree Set: " + myHashSet);
            System.out.println("Tree Set contains: " + str);
        }
        else
        {
            System.out.println("Element not found in Tree Set.");
        }

        if (myHashMap.containsValue(str))
        {
            System.out.println("Hashmap (key=value): " + myHashMap);
            System.out.println("Hashmap contains: " + str);
        }
        else
        {
            System.out.println("Element not found in Hashmap.");
        }

        if (myLinkedHashMap.containsValue(str))
        {
            System.out.println("Linked Hashmap (key=value): " + myLinkedHashMap);
            System.out.println("Linked Hashmap contains: " + str);
        }
        else
        {
            System.out.println("Element not found in Linked Hashmap.");
        }

        if (myTreeMap.containsValue(str))
        {
            System.out.println("Treemap (key=value): " + myTreeMap);
            System.out.println("Treemap contains: " + str);
        }
        else
        {
            System.out.println("Element not found in Treemap.");
        }


        // Inserting a new element between 3rd and 4th element
        System.out.println();
        String ele = "7";
        System.out.println("// Inserting " + ele + " between 3rd and 4th element ");

        System.out.println("Linked List Before: " + myLinkedList);
        myLinkedList.add(3, ele);
        System.out.println("Linked List After: " + myLinkedList);

        System.out.println("Array List Before: " + myArrayList);
        myArrayList.add(3, ele);
        System.out.println("Array List After: " + myArrayList);


        System.out.println("Priority Queue Before: " + myPriorityQueue);

//        pQ = myPriorityQueue.iterator();
//        while(pQ.hasNext() && i!=4)
//        {
//            if (i == 3)
//            {
//                myPriorityQueue.remove(pQ.next()); break;
//            }
//            pQ.next();
//            i++;
//        }

        String[] arrPQ = new String[myPriorityQueue.size()];
        arrPQ = myPriorityQueue.toArray(arrPQ);

        for(int k=3; k<arrPQ.length; k++)
        {
            myPriorityQueue.remove(arrPQ[k]);
        }

        myPriorityQueue.add(ele);

        for(int k=3; k<arrPQ.length; k++)
        {
            myPriorityQueue.add(arrPQ[k]);
        }

        System.out.println("Priority Queue After: " + myPriorityQueue);


        System.out.println("Hash Set Before: " + myHashSet);

        String[] arrHS = new String[myHashSet.size()];
        arrHS = myHashSet.toArray(arrHS);

        for(int k=3; k<arrHS.length; k++)
        {
            myHashSet.remove(arrHS[k]);
        }

        myHashSet.add(ele);

        for(int k=3; k<arrHS.length; k++)
        {
            myHashSet.add(arrHS[k]);
        }

        myHashSet.add("3");

        System.out.println("Hash Set After: " + myHashSet);
        System.out.println("Hash set maintains order. Added "+ele+" to end of set. Added 3 in between 3rd and 4th elements.");


        System.out.println("Linked Hash Set Before: " + myLinkedHashSet);

        String[] arrLHS = new String[myLinkedHashSet.size()];
        arrLHS = myLinkedHashSet.toArray(arrLHS);

        for(int k=3; k<arrLHS.length; k++)
        {
            myLinkedHashSet.remove(arrLHS[k]);
        }

        myLinkedHashSet.add(ele);

        for(int k=3; k< arrLHS.length; k++)
        {
            myLinkedHashSet.add(arrLHS[k]);
        }

        System.out.println("Linked Hash Set After: " + myLinkedHashSet);


        System.out.println("Tree Set Before: " + myTreeSet);

        String[] arrTS = new String[myTreeSet.size()];
        arrTS = myTreeSet.toArray(arrTS);

        for(int k=3; k<arrTS.length; k++)
        {
            myTreeSet.remove(arrTS[k]);
        }

        myTreeSet.add(ele);

        for(int k=3; k<arrTS.length; k++)
        {
            myTreeSet.add(arrTS[k]);
        }

        myTreeSet.add("3");

        System.out.println("Tree Set After: " + myTreeSet);
        System.out.println("Tree set maintains order. Added "+ele+" to end of set. Added 3 in between 3rd and 4th elements.");


        System.out.println("Hashmap Before: " + myHashMap);

        String[] arrHMKeySet = myHashMap.keySet().toArray(new String[myHashMap.size()]);
        String[] arrHMValuesSet = myHashMap.values().toArray(new String[myHashMap.size()]);

        for(int k=3; k<arrHMKeySet.length; k++)
        {
            myHashMap.remove(arrHMKeySet[k]);
        }

        myHashMap.put("4",ele);

        for(int k=3; k<arrHMValuesSet.length; k++)
        {
            myHashMap.put(arrHMKeySet[k], arrHMValuesSet[k]);
        }

        System.out.println("Hashmap After: " + myHashMap);


        System.out.println("Linked Hashmap Before: " + myLinkedHashMap);

        String[] arrLHMKeySet = myLinkedHashMap.keySet().toArray(new String[myLinkedHashMap.size()]);
        String[] arrLHMValuesSet = myLinkedHashMap.values().toArray(new String[myLinkedHashMap.size()]);

        for(int k=3; k<arrLHMKeySet.length; k++)
        {
            myLinkedHashMap.remove(arrLHMKeySet[k]);
        }

        myLinkedHashMap.put("4",ele);

        for(int k=3; k<arrLHMValuesSet.length; k++)
        {
            myLinkedHashMap.put(arrLHMKeySet[k], arrLHMValuesSet[k]);
        }

        System.out.println("Linked Hashmap After: " + myLinkedHashMap);


        System.out.println("Treemap Before: " + myTreeMap);

        String[] arrTMKeySet = myTreeMap.keySet().toArray(new String[myTreeMap.size()]);
        String[] arrTMValuesSet = myTreeMap.values().toArray(new String[myTreeMap.size()]);

        for(int k=3; k<arrTMKeySet.length; k++)
        {
            myTreeMap.remove(arrTMKeySet[k]);
        }

        myTreeMap.put("4",ele);

        for(int k=3; k<arrTMValuesSet.length; k++)
        {
            myTreeMap.put(arrTMKeySet[k], arrTMValuesSet[k]);
        }

        System.out.println("Treemap After: " + myTreeMap);





    }
}
