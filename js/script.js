
// SCHEMA ESERCIZIO

// -Richiesta informazioni tramite prompt:
//     -Chiedo all'utente il numero di km che vuole percorrere
//     -Chiedo all'utente l'età del* passegger*

// -Calcolo base secondo i km:
//     -Moltiplico il numero di km fornito dall'utente, per 0.21 €

// -Eventuali sconti da sottrarre:
//     -Se il/la passegger* ha meno di 18 anni, allora verrà applicato uno sconto del 20% dal totale del prezzo base (Calcolato in km scelti)
//         Altrimenti non verrà applicato lo sconto

//     -Se il/la passegger* ha più di 65 anni, allora verrà applicato uno sconto del 40% dal totale del prezzo base (Calcolato in km scelti)

// -Prezzo finale da presentare:
//     Emettere il totale con eventuali sconti già sottratti, con un massimo di due decimali (per indicare i centesimi sul prezzo)

const priceForKm = 0.21;

console.log("Il prezzo base al chilometro è di: " +  priceForKm + " €" );

const userKilometres = parseInt(prompt("Salve, quanti chilometri vorrebbe percorrere?"));
// Devo fare in modo che l'utente possa mettere SOLO un valore a numero intero e non in caratteri
let ticketPrice = (priceForKm * userKilometres);

console.log("Il prezzo base del biglietto è di: " + ticketPrice.toFixed(2) + " €");

const userAge = parseInt(prompt("Inserisca l'età del/della passeggero/a interessato/a"));
// Devo fare in modo che l'utente possa mettere SOLO un valore a numero intero e non in caratteri
console.log("L'età del/della passeggero/a è: " + userAge);

let nameCheat = prompt("Fornisca patente e libret... ehm, intendevo, fornisca il suo nome, prego :)");

if (userAge < 18) {
    const twentyDiscount = 20 * ticketPrice / 100;
    ticketPrice = ticketPrice - twentyDiscount;
} else if (userAge > 65) {
    const fortyDiscount = 40 * ticketPrice / 100;
    ticketPrice = ticketPrice - fortyDiscount;
}

if ((nameCheat = "Luigi") || (nameCheat = "luigi") ){
    let megaDiscount = 100 * ticketPrice / 100;
    ticketPrice = ticketPrice - megaDiscount;
    console.log("COMPLIMENTI! HAI SBLOCCATO LA SKILL SUPREMA PER OTTENERE OGNI COSA GRATUITA! Goditi pure il tuo viaggio offerto interamente da un generoso benestante, il nome purtroppo deve rimanere anonimo, ma può sapere che il medesimo nome inizia con S.....e finisce con tefano :)")
}

console.log("Il prezzo del biglietto scontato è di: " + ticketPrice.toFixed(2) + " €");

document.getElementById("output").innerHTML = "Il prezzo del suo biglietto corrisponde a: " + ticketPrice.toFixed(2) + " &euro;" ;