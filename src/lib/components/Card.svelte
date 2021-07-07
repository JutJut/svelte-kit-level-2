<script lang="ts">
  import { FontAwesomeIcon } from 'fontawesome-svelte';

  export let card;

  console.log('card?', card);
</script>

<article class="card">
  <FontAwesomeIcon icon={[card.prefix, card.icon]} size="lg" />
  <h2 class="label">{card.label}</h2>
  <div class="separator" />
  <div class="content">{card.description}</div>
</article>

<style lang="sass">
  @import '../styles/mixins'

  .card
    border: 1px solid var(--body-color)
    border-radius: var(--radius)

    display: flex
    align-items: center
    flex-direction: column
    min-height: 200px
    padding: 1rem

    .label
      text-align: center
      font-size: 1.5rem
      margin: 1rem 0
      color: var(--body-color)

  .separator
    width: 15%
    height: 2px
    background-color: var(--primary-color)
    margin-bottom: 1rem

  .content
    font-size: 0.8rem
</style>
