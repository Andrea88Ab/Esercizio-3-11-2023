/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
/* function area (l1, l2)
{
  let areaRettangolo = l1*l2;
   return areaRettangolo;
}
 

 
//Definisco i lati del rettangolo
let l1 = parseFloat(prompt("inserisci valore primo lato"))
let l2 = parseFloat(prompt("inserisci valore secondo lato"));
 
//Chiamo le funzioni per calcolare i valori di perimetro e area

let areaRettangolo = area(l1,l2);
 
//stampo i valori appena calcolati
alert("L'area del rettangolo è "+ areaRettangolo);
 */
    


    

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* function crazySum(num1, num2) {
    if (num1 === num2) {
        return (num1 + num2) *3
    }else {
        return num1 + num2
    }  
}

let num1 = parseInt(prompt("inserisic numero 1"))
let num2 = parseInt(prompt("inserisci numero 2"))

let somma = crazySum(num1,num2)

alert(`la somma dei numeri é ${somma}`)
 */


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* function crazyDiff(numf) {
    let differenza =Math.abs(numf - 19)

    if (numf > 19) {
        return differenza * 3
        
    } else {
        return differenza
    }    
}

 
let numf = parseInt(prompt("inserisci numero"))
let risultato = crazyDiff(numf) 
alert(`la differenza é ${risultato}`) */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
    if (n >= 20 && n <= 100 || n === 400) {
        return true    
    }else {
        return false
    }

}
let n = parseInt(prompt("inserisci numero "))
let accettazione = boundary(n)

alert(accettazione)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(str) {
    if (str.startsWith("Epicode")) {
        return str
        
    } else {
        return "Epicode" + str
    }
    
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
    if (num % 3 === 0 || num % 7 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  let num = parseInt(prompt("inserisci numero"))
  let verifica = check3and7(num)
  alert(verifica)

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(str) {
    str.reverseString("Epicode")
    return str

    
}

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
