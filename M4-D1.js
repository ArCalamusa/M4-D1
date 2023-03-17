// 1. Crea una funziona che calcoli e ritorni la somma di due numeri interi. Se i due valori sono uguali, ritorna il triplo della somma.

function sommaInt(x, y) {
    let somma = x + y;
    if (x === y) {
        return somma * 3;
    } else {
        return somma;
    }
}
console.log(sommaInt(4, 2));

// 2. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.

function intT(x, y) {
    if (x === 50 || y === 50 || x + y === 50) {
        return true;
    } else {
        return false;
    }
}

// 3. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function remoVe(x, y) {
    if (y >= 0 && y < x.length) { //controllo sulla y affinchè consideri la sua lunghezza
        let array = x.split(''); // creazione array x stringa y posizione carattere da eliminare
        array.splice(y, 1); //rimuove carattere dell'array
        return array.join(''); //restituisce l'array in formato stringa
    } else {
        return 'posizione del carattere non valida'
    }
}
console.log(remoVe('ciao', 0));

// 4. Crea una funzione che ritorni il valore più alto tra tre numeri interi.

function alto(x, y, j) {
    let valore;
    if (x >= y && x >= j) { // verfica la condizione e se è vera esegue le istruzioni
        valore = x;
    }
    if (x <= y && y >= j) { // verfica la condizione e se è vera esegue le istruzioni
        valore = y;
    }
    if (x <= j && y <= j) { // verfica la condizione e se è vera esegue le istruzioni
        valore = j;
    }
    return valore;
}
console.log(alto(8, 4, 8));

//5. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

function controllaNum(x, y) {
    let condX = false;
    let condY = false;
    if ((x > 40 && x < 60) || (x > 70 && x < 100)) {
        condX = true;
    }
    if ((y > 40 && y < 60) || (y > 70 && y < 100)) { //separa le 2 condizioni la doppia parentesi ()
        condY = true;
    }
    if (condX === true && condY === true) {
        return true;
    } else {
        return false;
    }
}
console.log(controllaNum(42, 20));

// 6. Crea una funzione che crei e ritorni una nuova stringa formata ripetendo un numero dato di volte una stringa data. Sia la stringa che il numero devono essere passate come parametri.

function creaStringa(x, y) {
    let risultato = '';
    for (let i = 0; i < y; i++) {
        risultato += x + ' '; //risultato = a risultato + x in questo modo non si perde il pregresso + ' ' crea lo spazio tra le parole
    }
    return risultato;
}
console.log(creaStringa('ciao', 3));

// 7. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

function nomeCitta(x) {
    if (x.startsWith('Los') || x.startsWith('New')) {
        return x;
    } else {
        return false;
    }
}
console.log(nomeCitta('New York'));

// 8. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array con tre elementi. L’array deve essere passato come parametro.

function sommaArr(array) {
    let somma = 0;
    if (array.length === 3) {
        for (let i = 0; i < array.length; i++) {
            somma += array[i];
        }
        return somma;
    } else {
        return "l'arrey non ha 3 elementi!";
    }
}
console.log(sommaArr([1, 3, 5]));

// 9. Crea una funzione che controlli se un array di due elementi contiene il numero 1 o il numero 3. Se li contiene, ritorna `true`, altrimenti ritorna `false`.

function controllaArray(array) {
    if (array.length === 2) {
        if (array[0] === 1 || array[1] === 3 || array[1] === 1 || array[0] === 3) {
            return true;
        } else {
            return false;
        }
    } else {
        return 'array deve avere 2 elementi!';
    }
}
console.log(controllaArray([1,3]));


// 10. Crea una funzion che controlli che un array di due elementi NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

function controllaArray(array) {
    if (array.length === 2) {
        if (array.includes(1) || array.includes(3)) {
            return false;
        } else {
            return true;
        }
    } else {
        return 'array deve avere 2 elementi!';
    }
}
console.log(controllaArray([4,5]));

// 11. Crea una funzione per trovare la stringa più lunga in un array di stringhe. Passa l’array come parametro e ritorna la strtinga più lunga.

function stringPiuLunga(array) {
    let stringMax;
    let LungMax = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i].length >= LungMax) { //con il >= considera l'ultima iterazione
            stringMax = array[i];
            LungMax = array[i].length;
        }
    }
    return stringMax;
}
console.log(stringPiuLunga(['Mario', 'Franco', 'Giovanni']));

// 12. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.Angolo acuto: meno di 90° ⇒ ritorna “acuto” Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”Angolo retto: 90° ⇒ ritorna “retto”Angolo piatto: 180° ⇒ ritorna “piatto”

function tipoAngolo(gradi) {
//switch non utilizzabile valore non preciso
    if (gradi < 90) {
        return "Acuto";
    } else if (gradi === 90) {
        return "Retto";
    } else if (gradi > 90 && g < 180) {
        return "Ottuso";
    } else if (gradi === 180) {
        return "Piatto";
    } else {
        return "Input invalido!";
    }
}
console.log(tipoAngolo(45)); // Acuto
//console.log(tipoAngolo(90)); // Retto
//console.log(tipoAngolo(120)); // Ottuso
//console.log(tipoAngolo(180)); // Piatto
//console.log(tipoAngolo(200)); // Non valido

// 13. Crea una funzione che trovi e ritorni **l’indice** di del numero più alto in un array passato come parametro.

function indice(array) {
    let indiceNumAlto = 0;
    let valoreMax = array[0]; //il punto è per il metodo, qui inizializzo il primo valore dell'array
    for (let i = 1; i < array.length; i++) { //let quando non dichiaro variabile, inizializzo con 1 perchè lo 0 è gia assegnato alla variabile valoreMAx
        if (array[i] >= valoreMax) {
            //mettere sempre il nome dell'array se si fa riferimento ad un elemento specifico
            valoreMax = array[i];
            indiceNumAlto = i;
        }
    }
    return indiceNumAlto;
}
console.log(indice([3, 6, 99, 21, 10, 34]));

// 14. Crea una funzione per trovare e ritornare il numero PARI più alto in un array di numeri passato come parametro.

function maxPari(array) {
    let pariAlto = -1; //se l'array dovesse avere solo valori dispari restituisce -1 come avviso
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) { // % divide per 2 e restituisce il resto (per i dispari === 1)
            if (array[i] >= pariAlto) {
                pariAlto = array[i];
            }
        }
    }
    return pariAlto;
}
console.log(maxPari([7, 35, 7, 99, 21]));

// 15. Crea una funzione per controllare che due numeri (passati come parametri) siano uno positivo e uno negativo. Ritorna `true` se la condizione è applicata, `false` se non lo è.

function controllaNum(x, y) {
    if ((x > 0 && y < 0) || (x < 0 && y > 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(controllaNum(-1, 2));

// 16. Crea una funzione per creare e ritornare una nuova stringa che abbia i primi tre caratteri in minuscolo e gli altri in maiuscolo. Se la stringa è più corta di tre caratteri, tutta la stringa deve essere in maiuscolo. La stringa originale deve essere passata come parametro.

function creaNuovaStringa(str) {
    let str1 = '';
    if (str.length < 3) {
        return str.toUpperCase();
    } else {
        let str2 = str.substring(0, 3);
        let str3 = str.substring(3);
        return str2.toLowerCase() + str3.toUpperCase();
    }
}
console.log(creaNuovaStringa('cia'));

// 17. Crea una funzione che calcoli la somma di due numeri passati come parametri. Se la loro somma è compresa tra 50 e 80, ritorna `65`, altrimenti ritorna `80`.

function calc80(x, y) {
    let somma = x + y;
    if (somma <= 50 && somma >= 80) { //&& un numero compreso tra 2 intervalli
        return '65';
    } else {
        return '80';
    }
}
console.log(calc80(5, 5));

// 18. Crea una funzione per convertire un numero (passato come parametro) in una stringa basandoti su questi criteri:
// Il numero è divisibile per 3 ⇒ ritorna “Diego”
// Il numero è divisibile per 5 ⇒ ritorna “Riccardo”
// Il numero è divisibile per 7 ⇒ ritorna “Stefano”
// Se il numero non ha 3, 5 o 7 come divisore, ritorna il numero originale.
// ⚠️ Se il numero è divisibile per più di una di queste opzioni, ritorna l’unione delle due stringhe. Es. 15 è divisibile per 3 e per 5, quindi il valore ritornato sarebbe “DiegoRiccardo”.

function converteNum(x) {
    let diego = '';
    let riccardo = '';
    let stefano = '';
    if (x % 3 === 0) {
        diego = 'Diego';
    }
    if (x % 5 === 0) {
        riccardo = 'Riccardo';
    }
    if (x % 7 === 0) {
        stefano = 'Stefano';
    }
    if (diego === '' && riccardo === '' && stefano === '') { //numero non divisibile
        return x;
    } else {
        return diego + riccardo + stefano;
    }
}
console.log(converteNum(21));

// 19. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

//19. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.//

function fiat(string) {
    let parole = string.split(" ");
    let acronimo = "";
    for (let i = 0; i < parole.length; i++) {
        acronimo += parole[i][0].toUpperCase();
    }
    return acronimo;
}
console.log(fiat("National Aeronautics Space Administration"));
