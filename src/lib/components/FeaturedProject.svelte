<script lang="ts">
  import Heading2 from '$lib/components/Heading2.svelte';
  import TechList from '$lib/components/TechList.svelte';
  import { FontAwesomeIcon } from 'fontawesome-svelte';
  import Lazy from 'svelte-lazy';
  import Image from './Image.svelte';

  export let project;

  const { title, techs, demoLink, repoLink, image, content } = project;

  $: demoLinkLabel = `featured project ${title} demo`;
  $: repoLinkLabel = `featured project ${title} repo`;
</script>

<article class="project">
  {#if image}
    <a
      aria-label={demoLink ? demoLinkLabel : repoLink ? repoLinkLabel : `featured project ${title}`}
      href={demoLink ? demoLink : repoLink ? repoLink : '#'}
    >
      <Lazy height={200}>
        <Image src={image} alt={title} width="100%" animated={true} />
      </Lazy>
    </a>
  {/if}
  <section class="info">
    <a
      class="title-link"
      href={demoLink ? demoLink : repoLink ? repoLink : '#'}
      target="_blank"
      rel="noopener"><Heading2>{title}</Heading2></a
    >
    <div class="description">
      <svelte:component this={content} />
    </div>
    <TechList {techs} />
    <div class="link-container">
      {#if repoLink}
        <a
          href={repoLink}
          target="_blank"
          rel="noopener"
          title="Repository Link"
          aria-label={repoLinkLabel}
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
        </a>
      {/if}
      {#if demoLink}
        <a
          href={demoLink}
          target="_blank"
          rel="noopener"
          title="Demo Link"
          aria-label={demoLinkLabel}
        >
          <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="lg" />
        </a>
      {/if}
    </div>
  </section>
</article>

<style lang="sass">
  @import '../styles/mixins'

  .project
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-gap: 2.5rem
    padding: 2.5rem 0

    @include mq-gt-sm
      grid-template-columns: repeat(2, 1fr)

    &:nth-of-type(even)
      direction: rtl

    &:nth-of-type(even) *
      direction: ltr

    .info
      display: flex
      flex-direction: column
      position: relative

  .title-link
    text-decoration: none

    &:hover > :global(*)
      cursor: pointer
      color: var(--primary-color)

  .description
    white-space: pre-line

    @include contentbox
    // max-width: unset
    max-height: 180px
    position: relative
    padding: 0.5rem
    margin: 0

    > :global(p)
      height: 100%
      margin: 0
      font-size: 0.8rem
      display: -webkit-box
      -webkit-box-orient: vertical
      -webkit-line-clamp: 3
      overflow: hidden

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
