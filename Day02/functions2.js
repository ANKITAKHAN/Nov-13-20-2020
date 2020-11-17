//You can define a function to accept any number of parameters
//You can call it by passing any numbers of values
function work() {
    console.log("Working", arguments);
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

work();
work(24, 7);
work(365, "days", 24, 7);
work("all the time");
work(false);
