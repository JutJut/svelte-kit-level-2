<script>
  export let label;
  export let name;
  export let placeholder='';
</script>

<section class="input-wrapper">
  <label for={name}>{label}</label>
  <input type="text" name={name} placeholder="{placeholder}"/>
</section>

<style lang="sass">
  @import '../../styles/variables'

  .input-wrapper
    display: flex
    flex-direction: column
    gap: 0.5rem  
    input
      height: 50px
      width: 100%
      padding-left: 10px
      font-size: var(--base-font-size)
      color: var(--primary-color)
      background-color: transparent
      border: none
      border: 1px solid var(--title-color)
      transition: var(--transition-fast)
      &:focus
        color: var(--primary-color)
      &::placeholder
        color: var(--disabled-color)
        padding-left: 10px
</style>