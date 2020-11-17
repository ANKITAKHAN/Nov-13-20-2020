// var is function scoped
// let variables are block scoped
// const is block scoped and read only
function check(number) {
    notRecommendedVariable = "wth is going on";
    const pi = 3.14;
    if (number % 2 === 0) {
        //let message =  `${number} is even`;
        var message =  `${number} is even`;
    }
    console.log(message);
   // pi = 3.1415;
}

check(12);
console.log(notRecommendedVariable);