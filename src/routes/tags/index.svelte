<script context="module">
  import { base } from '$app/paths';
  import Heading1 from '$lib/components/Heading1.svelte';
  import Section from '$lib/components/Section.svelte';
  import Separator from '$lib/components/Separator.svelte';
  import TextLink from '$lib/components/TextLink.svelte';

  export async function load({ fetch }) {
    const tags = await fetch(`${base}/tags.json`).then((r) => r.json());
    return {
      props: { tags },
    };
  }
</script>

<script>
  export let tags = {};

  $: tagCount = Object.entries(tags).length;
</script>

<svelte:head>
  <title>Tags</title>
</svelte:head>

<Section full={true}>
  <section class="title">
    <Heading1>Tags</Heading1>
    <p>{tagCount} tags found.</p>
  </section>
  {#if tagCount}
    <Separator />
    {#each Object.entries(tags) as [char, tagList]}
      <h2>{char.toUpperCase()}</h2>
      <div class="tag-link-container">
        {#each Object.entries(tagList) as [tag, { count, label }]}
          <a href={`${base}/tags/${tag}`}>
            {label}{'\u00a0'}({count})
          </a>
        {/each}
      </div>
    {/each}
  {/if}
  <Separator />
  <TextLink link="/" label="Take me home" />
</Section>

<style lang="sass">
  .title :global(h1)
    margin-top: 3rem

  .tag-link-container
    display: flex
    flex-wrap: wrap

    a
      margin: 0.8rem
</style>
