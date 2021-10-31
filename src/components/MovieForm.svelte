<script lang="ts">
  import {MovieStore} from './../stores';
  import { v4 as uuid } from "uuid";

  let titleInput: string = "";
  let descriptionInput: string = "";
  let ratingInput: number = 0;

  $: btnDisabled =
    titleInput.trim().length <= 0 ||
    descriptionInput.trim().length <= 0 ||
    ratingInput === null;

  const handleClear = () => {
    titleInput = "";
    descriptionInput = "";
    ratingInput = 0;
  };

  const handleSubmit = () => {
    if (!btnDisabled) {
      const newMovie = {
        id: uuid(),
        title: titleInput,
        description: descriptionInput,
        rating: +ratingInput,
      };
      MovieStore.update((currentMovies) => {
        return [newMovie, ...currentMovies];
      })
    }
  };
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="input-group">
    <label for="title">Movie title</label>
    <input name="title" id="title" type="text" bind:value={titleInput} />
  </div>
  <div class="input-group">
    <label for="description">Movie description</label>
    <textarea
      name="description"
      id="description"
      bind:value={descriptionInput}
    />
  </div>
  <div class="input-group">
    <label for="rating">Movie rating</label>
    <input
      name="rating"
      type="number"
      min="0"
      max="10"
      bind:value={ratingInput}
    />
  </div>
  <div class="button-group">
    <button disabled={btnDisabled} class="save" type="submit">Save movie</button
    >
    <button class="clear" type="button" on:click={handleClear}
      >Clear inputs</button
    >
  </div>
</form>

<style>
  textarea {
    resize: none;
  }

  .input-group {
    display: grid;
  }

  .button-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .save {
    justify-self: start;
  }

  .clear {
    justify-self: end;
  }
</style>
