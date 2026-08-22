// print the no from 1 to 50 with even and odd numbers wise 
let i = 1;
for (i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log("Even number: " , i);
    } else {
        console.log("Odd number: " , i);
    }   
}

//Question: Find the sum of all even numbers from 1 to 100.
let sum = 0;   
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}  
console.log("Sum of even numbers from 1 to 100: " , sum);