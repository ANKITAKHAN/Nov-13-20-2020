* Here's a small exercise that will help you get accustomed to  functional style of coding in JavaScript. 


* Create an array of numbers 1, 2, 3, 4, 5, 6, 30, 56, 84, 23, 100
* Implement the following in a functional style using arrow functions


* Print all the numbers
* Print the sum of all numbers
* Print the first odd number
* Generate an list of squares of all numbers
* Generate a list of numbers divisible by 5. 
* Print all the even numbers

###### Hint:
* Refer to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

* Here's how you implement (1) without using a loop

``` javascript
let numbers = [1, 2, 3, 4, 5, 6, 30, 56, 84, 23, 100];
numbers.forEach(num => {
	console.log(num);
}); 
```

* __PLEASE DO NOT WRITE FOR LOOPS AT ALL__