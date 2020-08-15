<script>
  	import { movies } from '../stores/moviesStore.js';
  	import { onMount, createEventDispatcher } from 'svelte';
    import { fade, fly, slide } from 'svelte/transition';
	export let id;
    export let date;
    export let time;

    const dispatch = createEventDispatcher();
	const movie = $movies.find(m => m.id == id);

	let totalPrice = 0;
	let seatsContainer, seats, btn;

	onMount(() => {
		seatsContainer = document.querySelector('.seats-container');
		seats = document.querySelectorAll('.seat');
		btn = document.querySelector('.btn');

		const occupiedSeats = JSON.parse(localStorage.getItem(`${movie.id}-occupiedSeats`));
		if(occupiedSeats != null && occupiedSeats.length > 0) {
			console.log(occupiedSeats);
			occupiedSeats.map((seatIndex) => {
				[...seats][seatIndex].classList.add('occupied');
			})
		}

		seatsContainer.addEventListener('click', (e) => {
			if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
				e.target.classList.toggle('selected');
				if(e.target.classList.contains('selected')) {
					totalPrice += movie.price;
				}
				else {
					totalPrice -= movie.price;
				}
			}
		})
	})

	const checkout = () => {
        if(totalPrice > 0) {
            const selectedSeats = document.querySelectorAll('.selected');
            const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

            let occupiedSeats = JSON.parse(localStorage.getItem(`${movie.id}-occupiedSeats`));
            if(occupiedSeats != null && occupiedSeats.length > 0) {
                occupiedSeats = occupiedSeats.concat(seatsIndex);
                localStorage.setItem(`${movie.id}-occupiedSeats`, JSON.stringify(occupiedSeats));
            }
            else {
                localStorage.setItem(`${movie.id}-occupiedSeats`, JSON.stringify(seatsIndex));
            }

            dispatch('checkout', { id: movie.id, amount: totalPrice, seats: seatsIndex});
        }
	};
</script>

	<ul class="nav nav-fill" style="border-width: 1px;border-color: #eee;border-bottom-style: solid;">
        <li class="nav-item"><a class="nav-link active"><i class="fa fa-long-arrow-left" style="color:#007bff;" on:click></i></a></li>
        <li class="nav-item"><a class="nav-link text-left text-sm-left text-md-center text-lg-center text-xl-center" style="height: 47px;color: #42424c;font-size: 20px;font-family: poppins;">Pick your seat</a></li>
        <li class="nav-item"></li>
	</ul>
<div in:fade out:fade>
	<div>
        <div class="container-fluid d-flex justify-content-center" style="margin-top: 20px;/*width: 300px;*/"><img width="130px" src="{movie.portrait}" style="margin-right: 20px;border-radius: 7px;width: 110px;height: 150px;" height="0">
            <div style="margin-left: 10px;/*width: 300px;*/">
                <h4 style="margin-left: 11px;">{movie.name}</h4>
                <div class="table-responsive" style="width: 200px;font-size: 12px;">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td style="font-size: 10px;border-top: 0;line-height: 15px;">Show Time</td>
                                <td style="font-size: 10px;border-top: 0;line-height: 15px;">Date</td>
                            </tr>
                            <tr>
                                <td style="border: 0;line-height: 0;font-weight: bold;">{time}</td>
                                <td style="border: 0;line-height: 0;font-weight: bold;">{date}</td>
                            </tr>
                            <tr>
                                <td style="font-size: 10px;border-top: 0;line-height: 15px;">Cinema</td>
                                <td style="font-size: 10px;border: 0;">Ticket</td>
                            </tr>
                            <tr>
                                <td style="border: 0;line-height: 0;font-weight: bold;">XYZ Cinema</td>
                                <td style="border: 0;line-height: 0;font-weight: bold;">Rs. {movie.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <div class="container text-center" style="margin-top: 20px;/*border-style: solid;*//*border-bottom: 1px solid #eee;*/">
        <p class="labels"><i class="fas fa-circle" style="margin-right: 10px;color: #025CE1;/*border-radius: 50pxpx;*//*border: 1px solid #025CE1;*//*background-color: #025CE1;*/"></i>Selected&nbsp;<i class="far fa-circle" style="margin-right: 10px;color: #025CE1;/*border-radius: 50pxpx;*/margin-left: 10px;"></i>Available
            <i class="fas fa-circle" style="margin-right: 10px;color: #999;/*border-radius: 50pxpx;*/margin-left: 10px;"></i>Occupied</p>
    </div>

    <br>
    <div class="container text-center">
        <img src="./screen.png" class="img-fluid screen">
    </div>
    <br>

    <div class="container seats-container">

        <table>
            <tbody>
                <tr>
                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>
                    <td>&nbsp;1</td>
                    <td>&nbsp;2</td>
                    <td>&nbsp;3</td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td>&nbsp;4</td>
                    <td>&nbsp;5</td>
                    <td>&nbsp;6</td>
                    <td>&nbsp;7</td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td>&nbsp;8</td>
                    <td>&nbsp;9</td>
                    <td>&nbsp;10</td>
                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                </tr>
                <tr>
                    <td> 1 </td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                </tr>
                <tr>
                    <td> 2 </td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                </tr>
                <tr>
                    <td> 3 </td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                </tr>
                <tr>
                    <td> 4 </td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                </tr>
                <tr>
                    <td> 5 </td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                </tr>
                <tr>
                    <td> 6 </td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>

                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td><span class="seat"></span></td>
                    <td> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </td>

                </tr>

            </tbody>
        </table>

    </div>

    <div class="container text-center checkout-bar">
        <p>Total:- Rs {totalPrice}</p>
        <button class="btn btn-primary" on:click={checkout}>Checkout</button>
    </div>
</div>

<style>

</style>
