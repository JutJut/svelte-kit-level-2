<script>
  export let name;
  export let placeholder='';
</script>

<section>
  <textarea name={name} placeholder={placeholder} rows="4"/>
</section>

<style lang="sass">
  @import '../../styles/variables'

  textarea
    width: 100%
    padding: 0.5rem
    background-color: transparent
    border: 1px solid var(--title-color)
    border-radius: var(--radius)
    color: var(--title-color)
    font-size: var(--base-font-size)
    transition: var(--transition-fast)
    &:focus
      border-color: var(--title-color)
      color: var(--title-color)
    &::placeholder
      color: #ddd
      padding-left: 10px
</style>