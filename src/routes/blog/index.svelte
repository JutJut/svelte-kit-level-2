<script context="module">
  import { base } from '$app/paths';
  import Heading1 from '$lib/components/Heading1.svelte';
  import Section from '$lib/components/Section.svelte';
  import { DarkPaginationNav, paginate } from 'svelte-paginate';

  export async function load({ fetch }) {
    const posts = await fetch(`${base}/blog.json`).then((r) => r.json());
    return {
      props: { posts },
    };
  }
</script>

<script>
  export let posts = [];

  let items = posts;
  let currentPage = 1;
  let pageSize = 2;
  $: paginatedPosts = paginate({ items, pageSize, currentPage });
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Section full={true}>
  <Heading1>SvelteKit Blog</Heading1>
  <p class="info">{posts.length} posts.</p>
  {#each paginatedPosts as post}
    <a href={`${base}/blog/${post.slug}`}>
      <h2 class="title">{post.metadata.title}</h2>
      <p>{post.metadata.description}</p>
    </a>
  {/each}

  <!-- TODO: Add custom styling -->
  <DarkPaginationNav
    totalItems={items.length}
    {pageSize}
    {currentPage}
    limit={1}
    showStepOptions={false}
    on:setPage={(e) => (currentPage = e.detail.page)}
  />
</Section>
