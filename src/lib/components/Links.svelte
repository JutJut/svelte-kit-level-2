<script lang="ts">
  import { FontAwesomeIcon } from 'fontawesome-svelte';

  interface Link {
    icon: string;
    prefix: string;
    link: string;
  }

  export let links: Link[] = [
    // TODO: Move into a config file
    {
      icon: 'twitter',
      prefix: 'fab', // fab prefix for brands, fas for solid icons
      link: 'https://twitter.com/',
    },
    {
      icon: 'github',
      prefix: 'fab',
      link: 'https://github.com/JutJut/svelte-kit-level-2',
    },
    {
      icon: 'codepen',
      prefix: 'fab',
      link: 'https://codepen.io/',
    },
    // Add further social links with the icon of choice and link here
    // check https://fontawesome.com/icons?d=gallery&s=brands for other brand icons
  ];
</script>

<div class="container">
  <div class="links">
    {#each links as { link, prefix, icon }}
      <a href={link} target="_blank" rel="noopener" aria-label={`social link to ${link}`}>
        <FontAwesomeIcon icon={[prefix, icon]} size="lg" />
      </a>
    {/each}
  </div>
</div>

<style lang="sass">
  @import '../styles/mixins'

  .container
    @include flex-center
    flex-direction: column

  .links
    display: flex

    > a
      display: flex
      justify-content: center
      align-items: center

      > :global(svg)
        margin: 0.5rem
        color: var(--title-color)

      &:hover > :global(svg)
        color: var(--primary-color)
</style>
