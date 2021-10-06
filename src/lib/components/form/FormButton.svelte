<script>
  export let value
</script>

<section>
  <button>{value}</button>
</section>

<style lang="sass">
  @import '../../styles/variables'

  button
    width: 5rem
    height: 2.5rem
    background-color: transparent
    float: right
    border: 1px solid var(--primary-color)
    border-radius: var(--radius)
    color: var(--primary-color)
    font-size: var(--base-font-size)
    transition: var(--transition-fast)
    &:hover
      border: 2px solid var(--secondary-color)
      color: var(--secondary-color)
      transform: scale(1.1)
</style>