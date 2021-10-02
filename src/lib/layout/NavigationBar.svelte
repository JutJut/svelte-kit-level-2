<script lang="ts">
  import { page } from '$app/stores';
  import { FontAwesomeIcon } from 'fontawesome-svelte';

  export let menuLinks = [];
</script>

<nav>
  {#each menuLinks as { link, name, prefix="fas", icon }}
    <a class:active={$page.path === `/${link}`} href={link} aria-label={`social link to ${link}`}
      ><FontAwesomeIcon icon={[prefix, icon]} size="lg" />{name}</a
    >
  {/each}
</nav>

<style lang="sass">
  @import '../styles/mixins'

  nav
    background-color: var(--bg-content-color)
    border-top: 1px solid var(--border-color)
    flex: 1
    display: flex
    align-items: center
    justify-content: space-around
    position: fixed
    bottom: 0
    left: 0
    right: 0
    height: var(--header-height)

    @include mq-gt-sm
      display: none

    a
      @include flex-center
      flex-direction: column
      flex-shrink: 1
      text-decoration: none
      color: var(--title-color)
      font-size: 0.8rem
      line-height: 1
      position: relative
      height: var(--header-height)

      > :global(svg)
        margin-bottom: 0.4rem
        fill: var(--title-color)

      &:hover
        color: var(--primary-color)

        > :global(svg)
          fill: var(--primary-color)

  // TODO: Add active class styles
</style>
