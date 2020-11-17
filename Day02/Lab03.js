let numbers = [1, 2, 3, 4, 5, 6, 30, 56, 84, 23, 100];

// Print all the numbers
numbers.forEach(it => console.log(it));

// Print the sum of all numbers
const sum = numbers.reduce((currentValue, nextValue) => currentValue + nextValue);
console.log("Sum", sum);

// Print the first odd number
const firstOddNumber = numbers.find(it => it % 2 !== 0);
console.log("First odd number", firstOddNumber);

// Generate an list of squares of all numbers
const squaresOfAllNumbers = numbers.map(it => it * it);
console.log(squaresOfAllNumbers);

// Generate a list of numbers divisible by 5. 
const divBy5 = numbers.filter(it => it  % 5 == 0);
console.log("Divisible by 5", divBy5);

// Print all the even numbers
numbers
    .filter(it => it  % 2 == 0)
    .forEach(it => console.log(it));

