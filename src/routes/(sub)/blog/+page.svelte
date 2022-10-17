<script>
  import { base } from '$app/paths';
  import Heading1 from '$lib/components/Heading1.svelte';
  import Section from '$lib/components/Section.svelte';
  // import { DarkPaginationNav, paginate } from 'svelte-paginate';

  export let data;
  const { posts = [] } = data;

  // let items = posts;
  // let currentPage = 1;
  // let pageSize = 2;
  // $: paginatedPosts = paginate({ items, pageSize, currentPage });
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<Section full={true}>
  <Heading1>Blog</Heading1>
  <p>{posts.length} posts found.</p>
  {#each posts as post}
    <a href={`${base}/blog/${post.slug}`}>
      <h2 class="title">{post.title}</h2>
      <p>{post.description}</p>
    </a>
  {/each}

  <!-- TODO: Add custom styling -->
  <!-- <DarkPaginationNav
    totalItems={items.length}
    {pageSize}
    {currentPage}
    limit={1}
    showStepOptions={false}
    on:setPage={(e) => (currentPage = e.detail.page)}
  /> -->
</Section>
