# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

# Invariant Answer, Maxie M

When it comes to a good invariant for recursive implementation of `fib()`, a good invariant would be how at the start of each loop iteration the array (arr) always will contain a valid Fibonacci sequence up until the current index. This ensures correctness in the algorithm. This is by maintaining the structure of the fibonacci sequence up to the $nth$ term. 

Describing Reasoning Behind Conclusion
- The initial values of arr is $[0,1]$, which is the correct base case for $n = 0$   and $n = 1$
  
- Each iteration of the loop will calculate the next Fibonacci number by summing the last two values in arr
  
- These two previous values that will be summed will have already been computed and would be correct.
  
- Pattern will continue until the loop terminates. This mean arr will be holding the complete fibonacci sequence up to the $nth$ term  

## Plagiarism Statement: 
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Resources:

**note** Used two specific repositories for help

  -  fibonacci-invariants-ClaytonBrown4741
  -   fibonacci-invariants-Countmooshroom
