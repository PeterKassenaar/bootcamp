// Dit is javascript commentaar
//alert('Dit is het externe script bestand');
var getal1 = 10;
var getal2 = 20;
var result = getal1 + getal2;
console.log('Getal 1 is: ' + getal1);
console.log('Getal 2 is: ' + getal2);
console.log('Het resultaat is: ' + result);
// Hieronder de JavaScript calculator

// 1. Haal referentie op naar de knop, en sla deze op in een variabele
var knop = document.getElementById('btnOptellen');

// 2. voeg EventListener toe, zodat er iets gebeurt
// als op de knop wordt geklikt. In dat geval wordt
// de functie gaOptellen() aangeroepen
knop.addEventListener('click', gaOptellen);

// 3. Definieer de functie ga Optellen:
function gaOptellen() {
	// 3a: Ga referentie ophalen naar de twee tekstvelden.
	var getal1     = document.getElementById('getal1').value;
	var getal2     = document.getElementById('getal2').value;

	// 3b : getallen bij elkaar optellen
	var result     = parseInt(getal1) + parseInt(getal2);

	// 3c : referentie ophalen naar output veld en resultaat
	// er in wegschrijven.
	document.getElementById('result').innerText = result;
}