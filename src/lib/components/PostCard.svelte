<script lang="ts">
  import Heading2 from '$lib/components/Heading2.svelte';
  import Image from '$lib/components/Image.svelte';
  import TagList from '$lib/components/TagList.svelte';
  import Lazy from 'svelte-lazy';

  export let post;

  $: month = new Date(post.date).toLocaleDateString('en-EN', { month: 'short' });
  $: day = new Date(post.date).toLocaleDateString('en-EN', { day: '2-digit' });
  $: link = `/blog/${post.slug}`;

  $: image = post.image;
</script>

<article class="post">
  <div class="date-overlay">
    <span>{month}</span>
    <span>{day}</span>
  </div>
  {#if image}
    <a aria-label={`recent posts ${post.title}`} href={link}>
      <Lazy height={200}>
        <Image src={image} alt={post.title} width="100%" animated={true} />
      </Lazy>
    </a>
  {/if}
  <TagList tags={post.tags} />
  <a class="title-link" href={link}>
    <Heading2>{post.title}</Heading2>
  </a>
  <div class="description"><p>{post.description}</p></div>
</article>

<style lang="sass">
  @import '../styles/mixins'

  .post
    position: relative
    display: flex
    flex-direction: column
    border-radius: var(--radius)

  .date-overlay
    pointer-events: none
    z-index: 1
    position: absolute
    top: 0.5rem
    left: 0.5rem
    display: flex
    flex-direction: column
    justify-content: space-evenly
    height: 3rem
    width: 3rem
    color: var(--title-color)
    background: var(--bg-code-color)
    align-items: center
    border-radius: var(--radius)
    font-weight: 500
    line-height: 1rem

  // .title-link
  //   text-decoration: none

  //   &:hover :global(h2)
  //     color: var(--primary-color)

  .description
    white-space: pre-line

    @include contentbox
    max-width: unset
    max-height: 180px
    position: relative
    padding: 10px
    margin: 0

    > p
      height: 100%
      margin: 0
      font-size: 0.8rem
      display: -webkit-box
      -webkit-box-orient: vertical
      -webkit-line-clamp: 4
      overflow: hidden
</style>
