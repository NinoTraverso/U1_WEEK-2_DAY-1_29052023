/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* In JS puoi definire datatype con variabii, ad esempio 'let' o const'. Per definire una variabile scrivi la variabile sempre in minuscolo, poi scrivi cosa vuoi definire (ad esemio il tuo nome) seguendo uno stile camelCase, ovvero se hai più parole le tieni attaccate senza spazi,la prima è tutta minuscola ma per ogni parola che segue la prima lettera della parola va scritta in maiuscolo,e il resto in minuscolo. Ci metti il segno uguale, e poi usi un datatype, ovvero il valore che definisce cos'e' la tua variabile. Ci sono 5 tipi principali di datatype, i quali si scrivono: 1) string, scritto tra due virgolette o doppie virgolete all'interno 2) number, ovvero solo il numero (intero o decimale) 3) dichara se la tua variable è vera o falsa 4) undefined, ovvero la tua variable non è definita (ad esempio da una string o un number) 5) null, ovvero che la tua variabile non ha alcun valore. */


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna Sad essa il tuo nome, sotto forma di stringa.
*/

/* 

let firstName = "Mario";
console.log("Name:", firstName); */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* 

let n1 = 12;
let n2 = 20;
let totn = n1 + n2;
console.log("Addition of n1 and n2 variables:", totn); */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* 

let x = 12;
console.log("Displaying the value of variable x:", x); */



/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* 

PRIMA PARTE DELL'ESERCIZIO 5

firstName = "Rossi";
console.log("Name changed:", firstName); 

SECONDA PARTE DELL'ESERCIZIO 5

const pi = 3.14;
console.log("Approximate value of pi with constant prefix", pi);
pi = 15;
console.log(
  "Value of constant prefix canghed to 15, but since pi was set as a constat, the value of p will be 3.14 anyways",
  pi
);
console.log(
  "The error above pops up because pi is a constant prefix and cannot be changed"
);

Questo mi darà un errore che, se non risolto, il restante codice non funzionerà */





/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* 
x -= 4;
console.log("Usato l'operatore -= per sottrarre 4 da x che da ugaule:", x);
*/

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* 

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);

EXTRA

name2 = name1;
console.log(name1 === name2); */
