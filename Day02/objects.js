//let arr = new Array(1, 2, 3, 4, 5);
let arr = [1, 2, 3, 4, 5];

//let str = new String("something");
let str = "something";

//let num = new Number(10);
let num = 10;

//let obj = new Object();
let obj = {};
//JSON or JavaScript Object Notation
let car = {
    model: "BMW",
    year: 2020,
    drive(speed) {
        console.log(`Driving ${this.model} at a speed of ${speed} km/h`);
    }
};
console.log(car);
car.drive(100);

let anything = {
    name: "Sam", age: 12, hobbies: ["TV", "Eat", "Sleep"]
};
console.log(anything.name, anything.age, anything.hobbies);



