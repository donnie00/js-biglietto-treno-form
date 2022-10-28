// const firstPrice = document.getElementById('firstPrice');
// const actualPrice = document.getElementById('actualPrice');

const kmEl = document.querySelector('[name = kmInput]');
const ageEl = document.querySelector('[name = ageInput]');
const nameEl = document.querySelector('[name = nameInput]');
const discountEl = document.getElementById('discount');
const buyBtnEl = document.getElementById('buyBtn');
const delBtnEl = document.getElementById('deleteBtn');
const nameDisplay = document.getElementById('nameDisplay');
const kmDisplay = document.getElementById('kmDisplay');
const totalDisplay = document.getElementById('totalDisplay');

const kmPrice = 0.21;

let discountedPrice;

let discountApplied = discountEl.value;

buyBtnEl.addEventListener('click', function () {
	const kmNeeded = parseInt(kmEl.value);
	const age = parseInt(ageEl.value);

	const ticketPrice = kmPrice * kmNeeded;

	if (age < 18 && discountEl.value != 0.8) {
		alert('Lo sconto applicato non corrisponde');
	} else if (age > 65 && discountEl.value != 0.6) {
		alert('Lo sconto applicato non corrisponde');
	}

	if (discountEl.value === '') {
		discountedPrice = ticketPrice;
	} else {
		discountedPrice = ticketPrice * discountEl.value;
	}

	kmDisplay.innerHTML = kmNeeded;
	totalDisplay.innerHTML = `${discountedPrice.toFixed(2)}&euro;`;
	nameDisplay.innerHTML = nameEl.value;
});

delBtnEl.addEventListener('click', function () {
	nameEl.value = '';
	ageEl.value = '';
	kmEl.value = '';
});
