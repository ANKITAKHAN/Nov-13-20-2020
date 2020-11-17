let i = 10;
let str = "string";
let b = false;
const eat = function(items) {
    console.log(`Eating ${items}`);
};

eat('Rice');

function sleep() {
    console.log("Sleeping");
}
const work = function() {
    console.log("Attending online classes");
};

// Functions that take another function as arguments are called higher order functions
function doSomething(arg) {
    if (typeof(arg) === "function") {
        arg();
    }
}

doSomething(sleep); // totally different from doSomething(sleep());
doSomething(work);
doSomething(10);
doSomething(function() {
    console.log("Scratching my head now");
});





//eat = function() {};

// function eat(items) {
//     console.log(`Eating ${items}`);
// }

// function eat(items) {
//     console.log(`Not Eating ${items}`);
// }