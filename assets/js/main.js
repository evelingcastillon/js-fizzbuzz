/* Istruzioni:
Scrivi un programma che stampi i numeri da 1 a 100, */
//ma per i multipli di 3 stampi “Fizz” al posto del numero

//per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

var n = 1;
var somma = 0;

for (var i = 0; i < 100; i++) {
    somma = somma + n;
    if ((somma % 3 == 0)&&(somma % 5 == 0)) {
        console.log(somma + "fizzbuzz");
    } else if (somma % 3 == 0) {
        console.log(somma + "fizz");
    } else if (somma % 5 == 0) {
        console.log(somma + "buzz");
    } else {
        console.log(somma);
    }
}