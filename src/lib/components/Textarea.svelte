<script>
  export let name;
  export let placeholder = '';
</script>

<textarea {name} {placeholder} rows="4" />

<style lang="sass">
  textarea
    width: 100%
    padding: 0.5rem 1rem
    background-color: transparent
    border: 1px solid var(--title-color)
    border-radius: var(--radius)
    color: var(--title-color)
    font-size: var(--base-font-size)
    transition: var(--transition-fast)
    font-family: unset
    &:focus
      color: var(--title-color)
    &::placeholder
      color: var(--disabled-color)
      padding-left: 10px
</style>
