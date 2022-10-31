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

	//Controllo i dati inseriti, altrimenti li faccio reinserire

	if (isNaN(age) || isNaN(kmNeeded)) {
		alert('Attenzione! Rincontrollare dati inseriti');
	}

	let discountApplied = discountEl.value;

	const ticketPrice = kmPrice * kmNeeded;

	if (
		(age < 18 && discountApplied != 0.8) ||
		(age > 65 && discountApplied != 0.6)
	) {
		alert('Lo sconto applicato non corrisponde');
	}

	//applicare lo sconto corretto se selezionato

	if (discountEl.value === '') {
		discountedPrice = ticketPrice;
		discountDisplay.innerText = 'Base';
	} else {
		discountedPrice = ticketPrice * discountApplied;

		//stampare sconto giusti in base a quello selezionato

		if (discountApplied == 0.8) {
			discountDisplay.innerHTML = 'Minnorenni';
		} else if (discountApplied == 0.6) {
			discountDisplay.innerHTML = 'Over 65';
		}
	}

	//se non si ha il prezzo perche i valori non sono numeri, si inseriscono dei trattini

	if (isNaN(discountedPrice)) {
		totalDisplay.innerHTML = '--&euro;';
	} else {
		totalDisplay.innerHTML = `${discountedPrice.toFixed(2)}&euro;`;
	}

	//se non si inserisce il nome, segnare come ospite e non inserire numero carta

	if (nameEl.value == '') {
		nameDisplay.innerText = 'Guest';
		cardNumberDisplay.innerText = 'Nessuna carta';
	} else {
		nameDisplay.innerHTML = nameEl.value;
		cardNumberDisplay.innerText = cardNumber;
	}

	//assegno un posto a prescindere da tutto
	seatDisplay.innerText = seatNumber;
});

delBtnEl.addEventListener('click', function () {
	nameEl.value = '';
	ageEl.value = '';
	kmEl.value = '';
});
