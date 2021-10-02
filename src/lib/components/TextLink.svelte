<script lang="ts">
  import { FontAwesomeIcon } from 'fontawesome-svelte';

  export let link = '';
  export let label = '';
</script>

<a href={link ? link : '#'}>{label}<FontAwesomeIcon icon={['fas', 'arrow-right']} /></a>

<style lang="sass">
  @import '../styles/mixins'

  a
    @include flex-center
    text-decoration: none
    font-size: 0.8rem
    font-weight: 500
    white-space: nowrap
    padding: 0.4rem 0.8rem
    color: var(--primary-color)

    &:hover
      color: var(--secondary-color)
      text-decoration: underline

    &:hover > :global(svg)
      margin-left: 0.5rem

    > :global(svg)
      height: 0.8rem
      fill: currentColor
      margin-left: 0.25rem
      transition: margin-left var(--transition-fast) ease
</style>
