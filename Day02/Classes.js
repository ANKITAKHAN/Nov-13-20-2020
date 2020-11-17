class Person {
    //let name; //WRONG
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sleep(hours) {
        console.log(`${this.name} is sleeping for ${hours} hours`);
    }
}

class Superman extends Person {
    constructor(name, age, power) {
        super(name, age);
        this.power = power;
    }
    sleep(hours) {
        super.sleep(hours);
        console.log("I am superman. I don't sleep");
    }
}

let sm1 = new Superman("Brando", 200, 324876);
sm1.sleep(-1);


let p1 = new Person("Sam", 12);
console.log(p1.name, p1.age);
p1.sleep(12);

let p2 = new Person("Ram", 34);
console.log(p2.name, p2.age);
p2.sleep(6);