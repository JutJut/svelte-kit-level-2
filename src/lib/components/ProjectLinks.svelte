<script lang="ts">
  import { FontAwesomeIcon } from 'fontawesome-svelte';

  export let repoLink: string;
  export let repoLinkLabel = 'Repository Link';
  export let demoLink: string;
  export let demoLinkLabel = 'Demo Link';
</script>

<div class="link-container">
  {#if repoLink}
    <a
      href={repoLink}
      target="_blank"
      rel="noreferrer"
      title={repoLinkLabel}
      aria-label={repoLinkLabel}
    >
      <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
    </a>
  {/if}
  {#if demoLink}
    <a
      href={demoLink}
      target="_blank"
      rel="noreferrer"
      title={demoLinkLabel}
      aria-label={demoLinkLabel}
    >
      <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="lg" />
    </a>
  {/if}
</div>

<style lang="sass">
  .link-container
    display: flex
    gap: 0.8rem
    justify-content: flex-end
    margin-top: 0.5rem

    > a
      display: flex
      justify-content: center
      align-items: center

      > :global(svg)
        color: var(--title-color)

      &:hover > :global(svg)
        color: var(--primary-color)
</style>
