class Transaction {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
        this.date = new Date().toDateString();
    }
}

class Account {
    //don't initialize variables here

    constructor(initialBalance = 10001) {
        if (initialBalance < 10000) {
            throw new Error("Initial balance cannot be lesser than 10000");
        }
        this.balance = initialBalance;
        this.withdrawLimit = 0;
        this.transactions = [];

        //This is withdraw limit variable.
        //this.i = 0;
    }

    deposit(amount) {
        this.balance += amount;
        let txn = new Transaction("Deposit", amount);
        this.transactions.push(txn);
    }

    withdraw(amount) {
        if (this.balance < amount || ((this.balance - amount) < 10000)) {
            throw new Error(`Insufficient balance. Withdraw denied`);
        }
        this.withdrawLimit++;
        this.balance -= amount;
        this.transactions.push(new Transaction("Withdraw", amount));
        if (this.withdrawLimit > 3) {
            let fee = amount * 0.005;
            this.balance -= fee;
            this.transactions.push(new Transaction("Withdraw Fees", fee));
        }
    }

    printStatement() {
        this.transactions.forEach(txn => {
            console.log(`${txn.type} for Rs.${txn.amount} on ${txn.date}`);
        });
    }

}

let acc = new Account(20000);
acc.deposit(1000);
acc.deposit(1000);
acc.deposit(1000);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.printStatement();
console.log("Balance", acc.balance);
try {
    let acc2 = new Account(1000);
} catch (error) {
    console.log(`Error: ${error.message}`);    
}

acc.withdraw(100000);
