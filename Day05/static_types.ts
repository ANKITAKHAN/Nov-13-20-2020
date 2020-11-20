let x: number;
x = 10;

let lang: string;
lang = "Java";

console.log(x, lang);

let b: boolean = false;
let flag: boolean;
flag = true;

let isAvailable = true;  // Type inference

let cities: string[];
//cities = ["Chennai", "Pune", 12]; // Compile-time Error
cities = ['Chennai', 'Pune', 'Bangalore'];
cities.forEach((city: string) => console.log(city));

const isEven = function(x: number): boolean {
    return x % 2 === 0;
}

isEven(12);
isEven(20);

const printSomething = function(name: string): void {
    console.log(name);
}

const add = (a: number, b: number) => a + b;
const subtract = (a: number, b: number) => a - b;

console.log(add(1, 2));


