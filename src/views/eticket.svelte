<script>
	import { onMount } from 'svelte';
	import { movies } from '../stores/moviesStore';
    import { fade, fly, slide } from 'svelte/transition';

	export let id = 3;
	export let seats = [];
	export let amount = 0;
	export let date;
	export let time;

	const movie = $movies.find(m => m.id == id);

	const downloadPdf = () => {
		html2pdf()
		.set({ html2canvas: { scale: 4 } })
		.from(el)
		.save("e-ticket.pdf");
	}
</script>


<ul class="nav nav-fill" style="border-width: 1px;border-color: #eee;border-bottom-style: solid;">
    <li class="nav-item"><a class="nav-link active"><i class="fa fa-long-arrow-left" on:click></i></a></li>
    <li class="nav-item"><a class="nav-link text-center text-sm-center text-md-center text-lg-center text-xl-center" style="height: 47px;color: #42424c;font-size: 20px;font-family: poppins;">E-Ticket</a></li>
    <li class="nav-item"><a class="nav-link"  style="height: 47px;font-size: 20px;cursor: pointer;"></a></li>
</ul>

<div in:slide class="container d-flex flex-column align-items-center" style="margin-top: 10px;/*border: 2px solid #eee;*/border-radius: 5px;padding-top: 15px;padding-bottom: 15px;">
    <div id="e-ticket" class="box d-flex flex-column align-items-center" >

        <img class="img-fluid" src="{movie.landscape}" style="max-width: 320px;border-radius: 10px;">
        <h4 style="margin-top: 20px;font-weight: bold;">{movie.name}</h4>
        <div class="table-responsive d-flex justify-content-center" style="border-top: 2px solid #eee;border-bottom: 2px solid #eee;">
            <table class="table" style="max-width: 320px;/*text-align: center;*/">
                <tbody>
                    <tr>
                        <td style="border-style: none;border-top: 0;">Date</td>
                        <td class="float-right" style="border-top: 0;">Cinema</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;border-top: 0;">{date}</td>
                        <td class="float-right" style="font-weight: bold;border-top: 0;">XYZ Cinema Hall</td>
                    </tr>
                    <tr>
                        <td style="border-top: 0;">Time</td>
                        <td class="float-right" style="border-top: 0;">Seats</td>
                    </tr>
                    <tr>
                        <td style="font-weight: bold;border-top: 0;">{time}</td>
                        <td class="float-right" style="font-weight: bold;border-top: 0;">
                        	{seats}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <img src="api.qrserver.com.png" style="margin-top: 20px;width: 150px;margin-bottom: 20px">

        <p> Amount Paid:- <b>Rs.{ amount }</b></p>
        <button class="btn btn-primary" type="button" style="margin-top: 10px;padding: 10px;width: 330px;cursor: pointer;" on:click={downloadPdf}>Download</button>

    </div>
</div>

<style>

</style>
