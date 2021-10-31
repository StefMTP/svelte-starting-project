<div class="card">
  <slot />
</div>

<style>
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr) auto;
    grid-template-areas:
      "rating title close"
      "description description description";
    align-items: center;
    margin: 1rem 0;
    border-radius: 6px;
    padding: 1rem;
    background-color: black;
    color: #fff;
  }
</style>
