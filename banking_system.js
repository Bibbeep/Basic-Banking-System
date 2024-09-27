/*  
 *  Nama    :   Muhammad Habib Al Farabi (BES2409KM7040)
 *  Kelas   :   BEJS 2
 *  Chapter :   2
 */

import { BankAccount } from './bank_account.js';

const deposit = async (account, amount) => {
    try {
        console.log('Processing deposit...');
        await account.deposit(amount);
        alert(`${amount} has been added to your account!\n`);
    } catch (error) {
        alert(`Operation failed: ${error.message}\n`);
    }
};

const withdraw = async (account, amount) => {
    try {
        console.log('Processing withdrawal...');
        await account.withdraw(amount);
        alert(`${amount} has been withdrawn from your account!\n`);
    } catch (error) {
        alert(`Operation failed: ${error.message}\n`);
    }
};

const main = async () => {
    let state = 1;
    const newAccount = new BankAccount();
    do {
        state = parseInt(prompt(`Your current balance: ${newAccount.getBalance()}\n1. Deposit\n2. Withdraw\n0. Exit Program`));
    
        switch (state) {
            case 1:
                await deposit(newAccount, parseFloat(prompt('Deposit amount: ')));
                break;
            case 2:
                await withdraw(newAccount, parseFloat(prompt('Withdrawal amount: ')));
                break;
            default:
                continue;
        }
    } while (state);
};

main();