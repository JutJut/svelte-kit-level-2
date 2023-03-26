<script lang="ts">
  import { base } from '$app/paths';
  import Heading1 from '$lib/components/Heading1.svelte';
  import Section from '$lib/components/Section.svelte';
  import Separator from '$lib/components/Separator.svelte';
  import TextLink from '$lib/components/TextLink.svelte';

  export let data;
</script>

<svelte:head>
  <title>{data.label}</title>
</svelte:head>

<Section>
  <section class="title">
    <Heading1>{data.label}</Heading1>
    {#if data.count === 1}
      <p>{data.count} related post found.</p>
    {:else}
      <p>{data.count} related posts found.</p>
    {/if}
  </section>
  <Separator />

  <ul>
    {#each data.posts as { title, slug }}
      <li>
        <a href={`${base}/blog/${slug}`}>{title}</a>
      </li>
    {/each}
  </ul>

  <TextLink link="/tags" label="View all Tags" />
</Section>

<style lang="sass">
  .title :global(h1)
    margin-top: 3rem
</style>
