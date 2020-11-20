type PersonType = {
    name: string;
    age: number;
}; 

//let person = { name: 'Sam', age: 12, price: 1000 };
let person: PersonType = { name: 'Sam', age: 12 };

type CarType = {
    model: string;
    drive?: (miles: number) => void;
};

let car: CarType = { 
    model: 'BMW', 
    drive(miles: number) {
        console.log(`Driving ${this.model} at a speed of ${miles} mph`);
    }  
};
if (car.drive) {
    car.drive(100);
}


let anotherCar: CarType = {
    model: "Santro"
};
