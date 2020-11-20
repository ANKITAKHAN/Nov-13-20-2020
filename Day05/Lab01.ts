// class Transaction {
//     public type: string;
//     public date: Date;
//     public amount: number;
//     constructor(type: string, amount: number) {
//         this.type = type;
//         this.amount = amount;
//         this.date = new Date();
//     }
// }
class Transaction {
    constructor(public type: string, public amount: number, public date: Date = new Date()) {
    }
}
// Another alternative
type TransactionType = {
    type: string;
    amount: number;
    date: Date;
};

class Account {
    private theBalance: number;
    private withdrawLimit: number;
    private transactions: Transaction[];

    constructor(balance: number = 10000) {
        this.theBalance = balance;
        this.withdrawLimit = 0;
        this.transactions = [];
    }
    public get balance(): number {
        return this.theBalance;
    }
    public deposit(amount: number) {
        this.theBalance += amount;
        this.transactions.push(new Transaction('Deposit', amount));
    }
    public withdraw(amount: number) {
        this.withdrawLimit += 1;
        this.theBalance -= amount;
        this.transactions.push(new Transaction('Withdraw', amount));
        if (this.withdrawLimit > 3) {
            let fee = amount * 0.005;
            this.theBalance -= fee;
            this.transactions.push(new Transaction('Withdraw Fee', fee));
        }
    }
    public printStatement() {
        this.transactions.forEach((txn: Transaction) => {
            console.log(`${txn.type} on ${txn.date.getTime()} for $${txn.amount}`)
        });
    }
}
let acc: Account = new Account(20000);
acc.deposit(1000);
acc.deposit(1000);
acc.deposit(1000);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.printStatement();
console.log(`Balance: $${acc.balance}`);
