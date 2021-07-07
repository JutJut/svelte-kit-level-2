<script lang="ts">
  import { FontAwesomeIcon } from 'fontawesome-svelte';

  export let techs: string[] = [];
</script>

<section>
  {#each techs as tech}
    <span><FontAwesomeIcon icon={['fas', 'caret-right']} size="lg" />{tech}</span>
  {/each}
</section>

<style lang="sass">
  section
    display: flex
    flex-wrap: wrap
    margin-top: 0.8rem

    span
      display: flex
      align-items: center
      white-space: nowrap
      font-size: 0.8rem
      margin: 0 1rem 0.5rem 0
      color: var(--body-color)

      > :global(svg)
        color: var(--primary-color)
        height: 0.8rem
        margin-right: 0.25rem
</style>
