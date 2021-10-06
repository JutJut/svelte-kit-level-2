<script>
  export let name;
  export let placeholder='';
</script>

<section>
  <input type="text" name={name} placeholder="{placeholder}"/>
</section>

<style lang="sass">
  @import '../../styles/variables'
  
  input
    height: 50px
    width: 100%
    padding-left: 10px
    font-size: var(--base-font-size)
    color: var(--primary-color)
    background-color: transparent
    border: none
    border-bottom: 1px solid var(--title-color)
    transition: var(--transition-fast)
    &:focus
      outline: none
      border-color: var(--primary-color)
      color: var(--primary-color)
    &::placeholder
      color: #ddd
      padding-left: 10px
</style>