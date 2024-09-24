//code.js
//Maxie Machado 
//Algorithms: Fibonacci Invariants 
//Resources: Used two specific repositories for help: fibonacci-invariants-ClaytonBrown4741 and fibonacci-invariants-Countmooshroom
// Plagiarism Statement: I certify that I have listed all sources used to complete this exercise, 
// including the use of any Large Language Models. All of the work is my own, except where 
// stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
// suspected, charges may be filed against me without prior notice.

function fib(n) 
{
    if (n==0) return [0];
    if (n==1) return [0,1];
    
    let arr = [0,1];
    
    for (let i = 2; i <= n; i++)
    {
        arr.push(arr[i-1] + arr[i-2]);
    }
    return arr;
}

