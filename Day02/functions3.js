//You can define a function with the same name any number of times.
//The latest definition overrides the previous ones
function eat() {
    console.log("Eating");
}
eat();
eat("Rice");
eat("Bread", "Biscuit");

function eat(items) {
    console.log("Eating", items);
}
eat();
eat("Rice");
eat("Bread", "Biscuit");

function eat(item1, item2) {
    console.log("EatingLatest", item1, item2);
}

eat();
eat("Rice");
eat("Bread", "Biscuit");