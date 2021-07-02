<script lang="ts">
  import Icon from 'svelte-awesome';
  import { codepen, github, twitter } from 'svelte-awesome/icons';

  interface Link {
    icon: any;
    link: string;
  }

  export let links: Link[] = [
    {
      icon: twitter,
      link: 'https://twitter.com/',
    },
    {
      icon: github,
      link: 'https://github.com/knochenmark/gatsby-starter-level-2',
    },
    {
      icon: codepen,
      link: 'https://codepen.io/',
    },
  ];
</script>

<div class="container">
  <div class="links">
    {#each links as { link, icon }}
      <a href={link} target="_blank" rel="noopener" aria-label={`social link to ${link}`}
        ><Icon data={icon} scale={1.5} /></a
      >
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
