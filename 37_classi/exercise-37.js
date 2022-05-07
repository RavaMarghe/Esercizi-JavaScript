class BankAccount {
    constructor(money) {
        this.money = money;
    }

    deposit(money) {
        this.money += money;
    }

    withdraw(money) {
        this.money -= money;
    }

    view() {
        console.log(this.money);
    }

}




const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();