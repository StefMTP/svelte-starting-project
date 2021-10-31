<script lang="ts">
  import Card from "./Card.svelte";
  import {MovieStore} from './../stores';
  export let movie: movie;

  const handleDelete = (id: string) => {
    MovieStore.update((currentMovies) => {
      return currentMovies.filter(movie => movie.id !== id);
    });
  };
</script>

<Card>
  <div class="rating"><div class="rating-bubble">{movie.rating}</div></div>
  <h2>{movie.title}</h2>
  <button on:click={() => handleDelete(movie.id)} class="close-button">X</button
  >
  <p>{movie.description}</p>
</Card>

<style>
  h2 {
    grid-area: title;
    text-align: end;
    justify-self: end;
  }

  .rating {
    grid-area: rating;
  }

  .rating-bubble {
    text-align: center;
    border-radius: 50%;
    padding: 1rem;
    width: 2rem;
    height: 2rem;
    color: #fff;
    font-size: 1.5rem;
    background-color: #a42d2d;
  }

  .close-button {
    background: none;
    color: inherit;
    outline: inherit;
    border: none;
    cursor: pointer;
    grid-area: close;
    margin: 0 1rem;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    grid-area: description;
  }
</style>
