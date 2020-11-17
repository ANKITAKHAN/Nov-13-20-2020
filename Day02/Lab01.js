let numbers = [10, 23, 4, 66, 983, 22, 11, 56, 76, 39];


// Print the even numbers in the array
for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 2 === 0) {
        console.log(number);
    }
}
// Print the sum of all the numbers in the array
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Sum", sum);

// Print all the numbers divisible by 8
for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number % 8 === 0) {
        console.log(number);
    }
}

// Collect the numbers greater than 50 in a separate array and print the values
let numbersGt50 = [];
for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number > 50) {
        numbersGt50.push(number)
    }
}
console.log(numbersGt50);

// Find the largest and smallest numbers in the array
let min = numbers.length > 0 ? numbers[0] : 0;
let max = numbers.length > 0 ? numbers[0] : 0;
for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
}
console.log("Max", max);
console.log("Min", min);