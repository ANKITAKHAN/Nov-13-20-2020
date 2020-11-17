// Old Style
function playOldStyle() {
    console.log("Playing the Guitar");
}

// Modern style
const playModernStyle = function() {
    console.log("Playing the Guitar");
}

// Arrow functions
// Arrow functions are not just shortcuts; they also change the scope (more about it later)
const play = () => console.log("Playing the Guitar");
play();

const add = (a, b) => {
    return a + b;
};

// return keyword is not required, if the function has only one line of implementation
const multiply = (a, b) => a * b;

console.log(add(2, 3));
console.log(multiply(3, 4));
