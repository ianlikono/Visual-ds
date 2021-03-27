[![file structure: destiny](https://img.shields.io/badge/file%20structure-destiny-7a49ff?style=flat)](https://github.com/benawad/destiny)

 Visual Structures on the Browser
Remember when you fast saw a program doing something and wish you could somehow make one that does that? You get into coding write the cool hello worlds, follow the tutorials and now you feel you are ready.

Jump into the project of your dreams and the the first thing you experience is this:

![Alt text](/img/timeout.png "Optional Title")

##Ready to see it in chrome? Here you go!

![Alt text](/img/promise.png "Optional Title")

###Promise 🤔 I saw that term somewher. Twitter maybe?
You dig some developer accounts and twitter other developer forums and you finally get what had seen earlier.

![Alt text](/img/fun.jpeg "Optional Title")

#WHAT 🤷🏾‍♂️!!!!!!!
How is this related to looping through my array?

#After  millions of `Cannot read property of undefined` and `array.map() is not a function` .
You feel you one of the `big boys` and can tackle any programming problem presented. You open your email and you see an email from a recruiter from Microsoft. Two weeks later you have an interview scheduled and ready to show how good your skill really is.

#Interview 1 Question one.
> Write an algorithm to remove duplicates in a linked list.
>
![Alt text](/img/wat.jpg "Optional Title")

Even though that caught you by surprise you manage to figure out they must be a list connected in some way and if you figure out how to know if you have seen a similar element as you go through them and detaching it if you saw it before.

You knock out the question in 25 minutes and you feel warmed up ready to go.


#Interview 1  Question Two.
> Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once. Write a function to remove duplicates

At this point you start feeling like you have the job and all the scary stories you read about job interviews were all lies.

You wire up the solution quickly, you have been looping through data fetched from api's daily using helper functions and know very well how to loop through data, its the first thing you learnt when you started programming. Or do you? You create two beautiful for loops starting from the first element and comparing each element with all other elements in the array.

You run some test cases and indeed your implementation seems to work.

The interviewer asks on the time complexity and having poked online you know that those 2 loops will give you >`O(N * N )`. Easy right?

>Assuming that this function runs in a no-sql db somewhere and we have over one million records we need to migrate to sql with a short timeline, how would you Optimize the algorithm to run with a time complexity of O(N) to ensure the transformations are complete before the deadlines.

![Alt text](/img/no-way.jpg "Optional Title")

You are unable to implement this but you give out some solid logic of possible ways you might approach and before you know it its the second interview.

#Interview  2 question one.

>Given a binary tree, determine if it is symmetric tree(Mirror Image of Itself)

You have looked at BSTs before and maybe you have some CS background you are able to write down some  pseudocode  and you start recursing through the tree but as soon as you finish you see the interviewer giving you this look:

![Alt text](/img/bst.jpg "Optional Title")
 >

#Interview  2 question two.

>Given two words, beginWord and endWord, and a dictionary wordList, return all the shortest transformation sequences from beginWord to endWord, or an empty list if no such sequence exists. Each sequence should be returned as a list of the words [beginWord, s1, s2, ..., sk]

In your Head you like WOW! and wondering what you got yourself into. No body told you your brain will be hurting like this.

#Interview  3 question two.
>There are n different online courses numbered from 1 to n. Each course has some duration(course length) t and closed on dth day. A course should be taken continuously for t days and must be finished before or on the dth day. You will start at the 1st day. Given n online courses represented by pairs (t,d), your task is to find the maximal number of courses that can be taken.

Time is running out while you are figuring out some recursive solution and the interviewer jumps tells you it is not the most optimal solution and we can achieve this with a better solution of 0(n log n) by figuring out a way of safely ignoring some computations or coming up with some sort of priority  queue. He/She is nice enough to walk you through the solution but at this point your brain has had enough and you doubt if you will ever be able to grasp these.

#Summary

Well if all these sound new to you, then you have just scratched the surface. The is more even more than might scare you the first time you them.

- [ ] DFS
- [ ] BFS
- [ ] BST
- [ ] Dynamic programming
- [ ] Backtracking
- [ ] Priority queue

Those are just a few terms you will here people mentioning.

At first they seem intimidating but if you think of any of these in a non-scientific way i.e Ask someone with no background in programming and don't tell them you need an algorithm for that.

Example when i tried asking my friends with non-tech backgrounds about the duplicates question i got different answers like having someone at the end and at the beginning and they move together, or breaking the input into multiple parts and solving them in independent small units. I was surprised when one of them asked me what I will use for so he knows if he needs to finish searching the entire list and suggested not to remove duplicates instead just do the process during the migration copying what I need and deleting the database which made a lot of sense but would you think that if your brain is thinking about code ?

This made me realise that all these solutions are easy when thought in a visual manner and understanding them on life basis e.g the fastest place to get food on 30 minute break.

That is why I build this tool because I realized how easier it will be to solve these problems if you think of them in this manner and you will only be able to think of this if you can visualize what you are writing and see the call stack in real life because we all know we can't use a million records when building and most of the time we get instant results on functions we write locally even if they are executing unnecessary tasks and we can only catch this when we actually visualize this as most compilers will try hiding these from you.

#NOTE
I am no near exert in solving algorithm questions or even application structure. So if you poke around and see something that I am not doing correctly, have a better approach on or have a feature you want to add, **PR** are mostly appreciated, welcomed and encouraged.




