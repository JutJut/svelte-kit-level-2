<script>
  export let label;
  export let name;
  export let placeholder='';
</script>

<section class="input-wrapper">
  <label for={name}>{label}</label>
  <textarea name={name} placeholder={placeholder} rows="4"/>
</section>

<style lang="sass">
  @import '../../styles/variables'

  .input-wrapper
    display: flex
    flex-direction: column
    gap: 0.5rem
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
        color: var(--title-color)
      &::placeholder
        color: var(--disabled-color)
        padding-left: 10px
</style>