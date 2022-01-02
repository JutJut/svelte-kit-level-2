<script lang="ts">
  import Heading1 from '$lib/components/Heading1.svelte';
  import SkewedSection from '$lib/components/SkewedSection.svelte';

  export let title: string = '';
  export let angle: number = -8;
  export let facts;
</script>

<SkewedSection {angle}>
  <Heading1>{title}</Heading1>
  {#if facts}
    <section class="facts">
      {#each facts as { fact, count }}
        <section class="fact-container">
          <span class="count">{count}</span>
          <span class="fact">{fact}</span>
        </section>
      {/each}
    </section>
  {/if}
</SkewedSection>

<style lang="sass">
  @import '../styles/mixins'

  .facts
    width: 100%
    display: flex
    justify-content: center
    flex-wrap: wrap

    @include mq-gt-xs
      justify-content: space-between

  .fact-container
    display: flex
    flex-direction: column
    padding: 1rem

    & > .count
      margin-left: 2rem
      margin-bottom: 1rem
      font-size: 2rem
      font-weight: bold

    & > .fact
      position: relative
      text-transform: uppercase
      font-size: 0.8rem
      padding: 0.5rem 1rem
      background-color: var(--bg-color)
      margin-left: 2rem

      &:before
        content: ''
        position: absolute
        top: 50%
        left: -2rem
        width: 1rem
        height: 2px
        background-color: var(--primary-color)
</style>
