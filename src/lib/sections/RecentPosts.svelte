<script lang="ts">
  import Heading1 from '$lib/components/Heading1.svelte';
  import PostCard from '$lib/components/PostCard.svelte';
  import Section from '$lib/components/Section.svelte';

  export let posts;
</script>

<Section id="blog">
  <Heading1>Latest Blog Posts</Heading1>
  <article class="posts">
    {#each posts as post}
      <PostCard {post} />
    {/each}
  </article>
  <div class="link-container"><a href="/blog">View All Posts</a></div>
</Section>

<style lang="sass">
  @import '../styles/mixins'

  .posts
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-gap: 2.5rem
    margin-top: 2.5rem

    @include mq-gt-xs
      grid-template-columns: repeat(2, 1fr)

  .link-container
    @include flex-center
    width: 100%
    margin-top: 2.5rem
</style>
