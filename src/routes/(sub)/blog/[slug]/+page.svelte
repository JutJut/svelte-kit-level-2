<script lang="ts">
  import Heading1 from '$lib/components/Heading1.svelte';
  import Image from '$lib/components/Image.svelte';
  import Section from '$lib/components/Section.svelte';
  import Lazy from 'svelte-lazy';

  export let data;

  const { post } = data;

  $: image = post.image;
  $: date = new Date(post.date).toLocaleDateString('en-EN', { day: '2-digit', month: 'short', year: 'numeric' })
</script>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<div class="post-container">
  <Section>
    <article>
      <Heading1>{post.title}</Heading1>
      <div class="date">{date}</div>
      {#if image}
        <Lazy height={200}>
          <Image src={image} alt={post.title} width="100%" animated={false} />
        </Lazy>
      {/if}
      <div class="content">
        <svelte:component this={post.content} />
      </div>
    </article>
  </Section>
</div>

<style lang="sass">
  .post-container
    padding: 90px 0 120px

    .date
      font-size: 0.8rem
      text-transform: uppercase
      margin-bottom: 2rem

    .content
      margin: 3rem 1rem
</style>
