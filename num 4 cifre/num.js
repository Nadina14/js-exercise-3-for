/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

let numString = prompt('Scrivi un numero intero di 4 cifre');
let numN = parseInt(numString);

if (isNaN(numN) || numN.toString().length !== 4){
    alert('Non hai inserito un numero intero di 4 cifre');
}else {
    let somma = 0;
    for(let i = 0; i < numString.length; i++){
        let char = numString[i];
        somma += Number(char);
    }
    alert('La somma dei numeri che hai inserito è ' + somma);
}
