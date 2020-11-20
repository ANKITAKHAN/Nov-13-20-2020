class Person {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }

    public get name(): string {
        return this._name;
    }

    public get age(): number {
        return this._age;
    }

    public set age(value: number) {
        this._age = value;
    }

    public eat() {
        console.log(`${this._name} is eating`);
        
    }
}

class Superman extends Person {
    private thePower: number
    constructor(name: string, age: number, power: number) {
        super(name, age);
        this.thePower = power;
    }
    public get power(): number {
        return this.thePower;
    }
}


let sam = new Person("Sam", 12);
console.log(sam.name, sam.age);
sam.eat();