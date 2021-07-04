<script lang="ts">
  export let tags: string[] = [];
</script>

<section class="container">
  {#each tags as tag}
    <!-- TODO: Use link once Tags page exist -->
    <!-- <span class="tag"><a href="/tags/${tag}">#{tag}</a></span> -->
    <span class="tag">#{tag}</span>
  {/each}
</section>

<style lang="sass">
  .container
    display: flex
    flex-wrap: wrap
    margin: 0.5rem 0

  .tag
    pointer-events: auto
    display: flex
    align-items: center
    white-space: nowrap
    font-size: 0.8rem
    font-weight: 500
    text-transform: lowercase
    margin: 0 1rem 0.5rem 0

    > a
      color: var(--primary-color)
      text-decoration: none
</style>
