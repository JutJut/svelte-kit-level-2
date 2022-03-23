<script lang="ts">
  export let tags: string[] = [];
</script>

<div class="container">
  {#each tags as tag}
    <span class="tag"><a href="/tags/{tag}">#{tag}</a></span>
  {/each}
</div>

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

    // TODO: Add link to each tag
    // > a
    //   color: var(--primary-color)
    //   text-decoration: none
</style>
