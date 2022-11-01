const kmEl = document.querySelector('[name = kmInput]');
const ageEl = document.querySelector('[name = ageInput]');
const nameEl = document.querySelector('[name = nameInput]');
const discountEl = document.getElementById('discount');
const cardNumberDisplay = document.getElementById('cardNumberDisplay');
const seatDisplay = document.getElementById('seatDisplay');
const buyBtnEl = document.getElementById('buyBtn');
const delBtnEl = document.getElementById('deleteBtn');
const nameDisplay = document.getElementById('nameDisplay');
const discountDisplay = document.getElementById('discountDisplay');
const totalDisplay = document.getElementById('totalDisplay');

const cardNumber = Math.floor(Math.random() * (5000 - 1) + 1);
const seatNumber = Math.floor(Math.random() * (100 - 1) + 1);

const kmPrice = 0.21;

let discountedPrice;

buyBtnEl.addEventListener('click', function () {
	const kmNeeded = parseInt(kmEl.value);
	const age = parseInt(ageEl.value);
	const ticketPrice = kmPrice * kmNeeded;
	let discountApplied = discountEl.value;

	//Controllo i dati inseriti, altrimenti li faccio reinserire

	if (isNaN(age) || isNaN(kmNeeded)) {
		alert('Attenzione! Rincontrollare dati inseriti');
	} else {
		//se non si inserisce il nome, segnare come ospite e non inserire numero carta
		//stampo il nome prima dell'errore dello sconto in quanto è un elemento separato dal resto della logica
		if (nameEl.value == '') {
			nameDisplay.innerText = 'Guest';
			cardNumberDisplay.innerText = 'Nessuna carta';
		} else {
			nameDisplay.innerHTML = nameEl.value;
			cardNumberDisplay.innerText = cardNumber;
		}

		if (
			(age < 18 && discountApplied != 0.8) ||
			(age > 65 && discountApplied != 0.6) ||
			(age >= 18 && age <= 65 && discountApplied != '')
		) {
			alert('Lo sconto applicato non corrisponde');
			//se i valori inseriti non sono idoneai stampo dei trattini placeholder
			discountDisplay.innerText = '--';
			totalDisplay.innerHTML = '--&euro;';
			seatDisplay.innerText = '--';
		} else {
			//applicare lo sconto corretto
			if (discountEl.value === '') {
				discountedPrice = ticketPrice;
			} else {
				discountedPrice = ticketPrice * discountApplied;
			}
			//assegno il posto insieme al prezzo totale scontato
			seatDisplay.innerText = seatNumber;
			totalDisplay.innerHTML = `${discountedPrice.toFixed(2)}&euro;`;

			//stampa sconto giusto in base a quello selezionato
			if (discountApplied == 0.8) {
				discountDisplay.innerText = 'Under 18';
			} else if (discountApplied == 0.6) {
				discountDisplay.innerText = 'Over 65';
			} else {
				discountDisplay.innerText = 'Base';
			}
		}
	}
});

delBtnEl.addEventListener('click', function () {
	nameEl.value = '';
	ageEl.value = '';
	kmEl.value = '';

	nameDisplay.innerText = '';
	discountDisplay.innerText = '';
	cardNumberDisplay.innerText = '';
	seatDisplay.innerText = '';
	totalDisplay.innerText = '';
});
