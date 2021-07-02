<script context="module" lang="ts">
  import { base } from '$app/paths';
  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const post = await fetch(`${base}/blog/${slug}.json`)
        .then((r) => r.json());
    return {
      props: { post }
    };
  }
</script>

<script lang="ts">
  export let post;
  let date = post.metadata.date.toUpperCase();
</script>

<svelte:head>
  <title>{post.metadata.title}</title>
</svelte:head>

<h1 class="title">{post.metadata.title}</h1>
<p class="info">DATE: {date}</p>
{@html post.content}
