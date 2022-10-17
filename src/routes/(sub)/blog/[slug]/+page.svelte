<script lang="ts">
  export let data;

  const { post } = data;

  const date = post.date.toUpperCase();
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1 class="title">{post.title}</h1>
<p class="info">DATE: {date}</p>
<svelte:component this={post.content} />
