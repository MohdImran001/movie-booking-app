window.onload = () => {
	const seatContainer = document.querySelector('.seats-container');
	const seats = document.querySelectorAll('.seat');
	const btn = document.querySelector('.btn');

	populateUI();

	btn.addEventListener('click', (e) => {
		const selectedSeats = document.querySelectorAll('.selected');
		const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

		let occupiedSeats = JSON.parse(localStorage.getItem('occupiedSeats'));
		if(occupiedSeats != null && occupiedSeats.length > 0) {
			occupiedSeats = occupiedSeats.concat(seatsIndex);
			localStorage.setItem('occupiedSeats', JSON.stringify(occupiedSeats));
		}
		else {
			localStorage.setItem('occupiedSeats', JSON.stringify(seatsIndex));
		}
	})

	seatContainer.addEventListener('click', (e) => {
		if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
			e.target.classList.toggle('selected');
		}
	})

	function populateUI() {
		const occupiedSeats = JSON.parse(localStorage.getItem('occupiedSeats'));
		if(occupiedSeats != null && occupiedSeats.length > 0) {
			occupiedSeats.map((seatIndex) => {
				[...seats][seatIndex].classList.add('occupied');
			})
		}
		btn.removeAttribute('disabled');
	}
};

