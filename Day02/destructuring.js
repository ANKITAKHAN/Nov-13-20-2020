let model = "BMW";
let color = "black";

// let car = {
//     model: model,
//     color: color
// };

let car = {
    model,
    color
};

let person = {
    name: "Sam",
    age: 12
};
// let name = person.name;
// let age = person.age;

let { name, age } = person; // object destructuring
console.log(name, age);

let arr = [10, 20, 30];
// let a = arr[0];
// let b = arr[1];
let [a, b] = arr;   // array destructuring
console.log(a, b);