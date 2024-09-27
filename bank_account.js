/*  
 *  Nama    :   Muhammad Habib Al Farabi (BES2409KM7040)
 *  Kelas   :   BEJS 2
 *  Chapter :   2
 */

class InvalidTypeError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidTypeError';
    }
}

class InvalidAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InvalidAmountError';
    }
}

class InsufficientFundsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InsufficientFundsError';
    }
}

export class BankAccount {
    #balance;

    constructor() {
        this.#balance = 0;
        alert(`Successfully created a new account!\nInitial balance: ${this.#balance}\n`);
    }

    deposit(amount) {
        return new Promise((resolve, reject) => {
            if (isNaN(amount)) {
                reject(new InvalidTypeError('Invalid type!'));
                return;
            } else if (amount <= 0) {
                reject(new InvalidAmountError('Invalid amount!'));
                return;
            }

            setTimeout(() => {
                this.#balance += amount;
                resolve();
            }, 1000);
        });
    }

    withdraw(amount) {
        return new Promise((resolve, reject) => {
            if (isNaN(amount)) {
                reject(new InvalidTypeError('Invalid type!'));
                return;
            } else if (amount > this.#balance) {
                reject(new InsufficientFundsError('Insufficient funds!'));
                return;
            } else if (amount <= 0) {
                reject(new InvalidAmountError('Invalid amount!'));
                return;
            }

            setTimeout(() => {
                this.#balance -= amount;
                resolve();
            }, 1000);
        });
    }

    getBalance() {
        return this.#balance;
    }
}