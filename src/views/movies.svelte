<script>
	import { createEventDispatcher } from 'svelte';
  import { movies } from '../stores/moviesStore.js';
  import { fade, fly, slide } from 'svelte/transition';

  const dispatch = createEventDispatcher();

	const bookSeats = (id) => {
		dispatch('bookSeats', {id: id});
	}
</script>

	<ul class="nav nav-fill" style="border-width: 1px;border-color: #eee;border-bottom-style: solid;">
  	    <li class="nav-item"><a class="nav-link active" style="color: #007bff;"></a></li>
  	  	<li class="nav-item"><a class="nav-link text-left text-sm-center text-md-center text-lg-center text-xl-center" style="height: 47px;color: #42424c;font-size: 20px;font-family: poppins;">Select A Movie</a></li>
  	  	<li class="nav-item"></li>
	</ul>

	<div style="/*margin-top: 20px;*/margin-bottom: 20px;" in:fade>
        <div class="container">
            <div class="row row-cols-sm-2 row-cols-md-4 text-center" style="margin-bottom: 20px;">
            {#each $movies as movie (movie.id)}
                <div class="col-md-3" style="margin-top: 50px;" on:click={() => bookSeats(movie.id)}>
                	<img class="img-fluid portrait" src="{movie.portrait}">
                    <h5>{movie.name}</h5>
                </div>
            {/each}
            </div>
        </div>
  </div>

<style>

</style>
