<script lang="ts">
  import { FontAwesomeIcon } from 'fontawesome-svelte';
  import { fade } from 'svelte/transition';

  export let scrollYValue;
</script>

{#if scrollYValue >= 800}
  <a
    in:fade={{ duration: 200 }}
    out:fade={{ duration: 200 }}
    href="#top"
    class="to-top"
    aria-label="Scroll to Top"><FontAwesomeIcon icon={['fas', 'arrow-up']} /></a
  >
{/if}

<style lang="sass">
  @import '../styles/mixins.sass'

  .to-top
    @include flex-center
    z-index: 1000
    text-decoration: none
    position: fixed
    bottom: calc(var(--header-height) + var(--space) * 1.5)
    right: 10px
    width: 2rem
    height: 2rem
    padding: 0.25rem
    border-radius: var(--radius)
    border: 1px solid var(--primary-color)
    background-color: var(--bg-content-color)
    transition: var(--transition-fast) ease-in

    &:hover,
    &:focus
      transform: scale(1.1)
      color: var(--secondary-color)
      border-color: var(--secondary-color)
</style>
