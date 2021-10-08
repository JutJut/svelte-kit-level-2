<script>
  export let value
</script>

<section>
  <button>{value}</button>
</section>

<style lang="sass">
  button
    width: 5rem
    height: 2.5rem
    background-color: transparent
    position: relative
    border: 1px solid var(--primary-color)
    border-radius: var(--radius)
    color: var(--primary-color)
    font-size: var(--base-font-size)
    transition: var(--transition-fast)
    &:hover
      border-color: var(--secondary-color)
      color: var(--secondary-color)
      transform: scale(1.1)
</style>