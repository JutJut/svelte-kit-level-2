<script context="module" lang="ts">
  import { base } from '$app/paths';
  import Heading1 from '$lib/components/Heading1.svelte';
  import Section from '$lib/components/Section.svelte';
  import Separator from '$lib/components/Separator.svelte';
  import TextLink from '$lib/components/TextLink.svelte';

  export async function load({ params, fetch }) {
    const slug = params.slug;
    const tag = await fetch(`${base}/tags/${slug}.json`).then((r) => r.json());
    return {
      props: { tag },
    };
  }
</script>

<script lang="ts">
  export let tag;
</script>

<svelte:head>
  <title>{tag.label}</title>
</svelte:head>

<Section>
  <section class="title">
    <Heading1>{tag.label}</Heading1>
    <p>{tag.count} related posts found.</p>
  </section>
  <Separator />
  <TextLink link="/tags" label="View all Tags" />
</Section>

<style lang="sass">
  .title :global(h1)
    margin-top: 3rem
</style>
