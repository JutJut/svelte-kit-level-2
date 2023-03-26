<script lang="ts">
  import { page } from '$app/stores';
  import Links from '$lib/components/Links.svelte';
  import Logo from '$lib/components/Logo.svelte';
  import { FontAwesomeIcon } from 'fontawesome-svelte';
  import { onMount } from 'svelte';

  export let menuLinks = [];
  let isLightTheme = true
  $: themeIcon = isLightTheme ? 'moon': 'sun';

  onMount(()=>{
    if ((window as any).__theme === 'dark') {
      isLightTheme = false
    }
  })

  function onToggleTheme() {
    isLightTheme = !isLightTheme;
    localStorage.setItem('theme', isLightTheme ? 'light': 'dark');
    (window as any).__setUserTheme(isLightTheme ? 'light' : 'dark');
  }
</script>

<header>
  <div class="container">
    <a title="logo" class="home-link" href="/">
      <Logo />
    </a>
    <nav>
      {#each menuLinks as { link, name }}
        <a
          class:active={$page.url.pathname === `/${link}`}
          href={link}
          aria-label={`social link to ${link}`}>{name}</a
        >
      {/each}
    </nav>
    <div class="icon-container">
      <Links />
      <button class="theme-toggle" on:click={onToggleTheme}>
        <FontAwesomeIcon icon={['fas', themeIcon]} size="lg" />
      </button>
    </div>
  </div>
</header>

<style lang="sass">
  @import '../styles/mixins'

  header
    height: var(--header-height)
    flex-shrink: 0
    background-color: var(--bg-content-color)
    padding-left: env(safe-area-inset-left)
    padding-right: env(safe-area-inset-left)

  .container
    display: flex
    align-items: center
    justify-content: space-between
    height: 100%
    width: 100%
    padding: 0 calc((var(--space) / 2))

    .icon-container
      display: flex

  .home-link
    text-decoration: none

  nav
    flex: 1
    height: 100%
    display: none

    @include mq-gt-sm
      display: flex
      align-items: stretch
      margin-left: 0.75rem

    & > a
      color: var(--title-color)
      position: relative
      margin: 0 0.5rem
      text-decoration: none
      display: flex
      align-items: center

      &:hover
        color: var(--primary-color)


  .theme-toggle
    cursor: pointer
    background: none
    border: none
    padding: 0
    aspect-ratio: 1
    font-size: 1rem
    border-radius: 50%

    > :global(svg)
      margin: 0.5rem
      color: var(--title-color)

    &:hover > :global(svg)
      color: var(--primary-color)
</style>
