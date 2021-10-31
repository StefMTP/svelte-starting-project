<script lang="ts">
  import MovieItem from "./MovieItem.svelte";
  import { fade, scale } from "svelte/transition";
  import {MovieStore} from './../stores';
</script>

<div class="movies">
  {#each $MovieStore as movie (movie.id)}
    <div in:scale out:fade>
      <MovieItem {movie} />
    </div>
  {/each}
</div>

<style>
</style>
