//code.js
//Maxie Machado 
//Algorithms: Fibonacci Invariants 

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

