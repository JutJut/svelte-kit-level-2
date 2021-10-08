<script>
  export let name;
  export let placeholder = '';
</script>

<input type="text" {name} {placeholder} />

<style lang="sass">
  input
    height: 50px
    width: 100%
    padding: 0 1rem
    font-size: var(--base-font-size)
    background-color: transparent
    color: var(--title-color)
    border: 1px solid var(--title-color)
    border-radius: var(--radius)

    &::placeholder
      color: var(--disabled-color)
</style>
