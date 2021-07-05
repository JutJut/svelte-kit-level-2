<script lang="ts">
  import Card from '$lib/components/Card.svelte';
  import Heading1 from '$lib/components/Heading1.svelte';
  import Section from '$lib/components/Section.svelte';

  export let content;
  export let cards;
</script>

<Section id="features">
  <Heading1>Our Features</Heading1>
  <div class="content">{@html content}</div>
  <section class="grid-container">
    {#each cards as card}
      <Card {card} />
    {/each}
  </section>
</Section>

<style lang="sass">
  @import '../styles/mixins'

  .content
    white-space: pre-line

  .grid-container
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-gap: 2.5rem
    margin-top: 2.5rem
    width: 100%

    @include mq-gt-xs
      grid-template-columns: repeat(2, 1fr)

    @include mq-gt-sm
      grid-template-columns: repeat(3, 1fr)
</style>
