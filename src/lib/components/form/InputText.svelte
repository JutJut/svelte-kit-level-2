<script>
  export let name;
  export let placeholder='';
</script>

<input type="text" name={name} placeholder="{placeholder}"/>

<style lang="sass">
  input
    height: 50px
    width: 100%
    padding-left: 10px
    font-size: var(--base-font-size)
    color: var(--primary-color)
    background-color: transparent
    border: 1px solid var(--title-color)
    transition: var(--transition-fast)
    &:focus
      color: var(--primary-color)
    &::placeholder
      color: var(--disabled-color)
      padding-left: 10px
</style>