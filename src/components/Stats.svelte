<script lang="ts">
  import { MovieStore } from "./../stores";

  $: totalMovies = $MovieStore.length;
  $: average =
    $MovieStore.reduce((partial_sum, { rating }) => partial_sum + rating, 0) /
    $MovieStore.length;
</script>

<div class="stats">
  <div class="count">Total movies: {totalMovies}</div>
  <div class="average">Average movie rating: {average.toPrecision(2)}</div>
</div>

<style>
  .stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }

  .average {
    justify-self: end;
  }
</style>
