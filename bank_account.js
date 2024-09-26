/*  
 *  Nama    :   Muhammad Habib Al Farabi (BES2409KM7040)
 *  Kelas   :   BEJS 2
 *  Chapter :   1
 */

let state = 1;
let saldo = 0;

const tambahSaldo = () => {
    nominal = parseFloat(prompt('Silahkan tambah saldo Anda'));
    
    if (nominal >= 0) {
        saldo += nominal;
        alert(`Saldo setelah ditambah: ${saldo}`);
    } else {
        alert('Operasi tambah saldo gagal! Nominal pengurangan saldo tidak valid.');
    }
};

const kurangiSaldo = () => {
    nominal = parseFloat(prompt('Silahkan kurangi saldo Anda'));

    if (nominal <= saldo) {
        saldo -= nominal;
        alert(`Saldo setelah dikurangi: ${saldo}`);
    } else if (nominal > saldo) {
        alert('Operasi kurangi saldo gagal! Nominal pengurangan saldo melebihi saldo yang tersedia.');
    } else {
        alert('Operasi kurangi saldo gagal! Nominal pengurangan saldo tidak valid.');
    }
};

do {
    state = parseInt(prompt(`Saldo Anda: ${saldo}\n1. Tambah Saldo\n2. Kurangi Saldo\n0. Exit Program`));

    switch (state) {
        case 1:
            tambahSaldo();
            break;
        case 2:
            kurangiSaldo();
            break;
        default:
            continue;
    }
} while (state);

alert(`Saldo Anda: ${saldo}`);