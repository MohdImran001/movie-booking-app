<script>
	import Movies from './views/movies.svelte';
	import Seats  from './views/seats.svelte';
	import ETicket from './views/eticket.svelte';

	let activeItem = "SelectMovie";
	let id, seats, amount;

	function handleBookSeats(e) {
		id = e.detail.id;
		activeItem = "SelectSeats";
	}

	function goBackToMovies() {
		activeItem = "SelectMovie";
	}

	function getTicket(e) {
		id = e.detail.id;
		seats = e.detail.seats;
		amount = e.detail.amount;
		activeItem = "ETicket";
	}
</script>

{#if activeItem === "SelectMovie"}
	<Movies on:bookSeats={handleBookSeats}/>
{:else if activeItem === "SelectSeats"}
	<Seats {id} on:click={goBackToMovies} on:checkout={getTicket}/>
{:else if activeItem === "ETicket"}
	<ETicket {id} {seats} {amount} on:click={goBackToMovies}/>
{/if}

<style>

</style>