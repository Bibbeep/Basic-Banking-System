/*  
 *  Nama    :   Muhammad Habib Al Farabi (BES2409KM7040)
 *  Kelas   :   BEJS 2
 *  Chapter :   2
 */

const { BankAccount } = require('./bank_account');

const deposit = async (account, amount) => {
    try {
        console.log('Processing deposit...');
        await account.deposit(amount);
        console.log(`${amount} has been added to your account!\n`);
        // console.log(`New balance: ${account.getBalance()}\n`);
    } catch (error) {
        console.error(`Operation failed: ${error.message}\n`);
    }
};

const withdraw = async (account, amount) => {
    try {
        console.log('Processing withdrawal...');
        await account.withdraw(amount);
        console.log(`${amount} has been withdrawn from your account!\n`);
        // console.log(`New balance: ${account.getBalance()}\n`);
    } catch (error) {
        console.error(`Operation failed: ${error.message}\n`);
    }
};

const printBalance = (account) => {
    console.log(`Current balance: ${account.getBalance()}\n`);
};

const init = async () => {
    const newAccount = new BankAccount();

    await deposit(newAccount, 300_000);
    await withdraw(newAccount, 100_000);
    printBalance(newAccount);

    await deposit(newAccount, 0);
    await deposit(newAccount, -300_000);
    await deposit(newAccount, 'ERROR');
    await deposit(newAccount, '69');
    printBalance(newAccount);

    await withdraw(newAccount, 0);
    await withdraw(newAccount, 500_000);
    await withdraw(newAccount, 'ERROR');
    await withdraw(newAccount, '420');
    printBalance(newAccount);
};

init();