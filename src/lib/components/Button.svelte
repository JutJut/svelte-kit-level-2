<script lang="ts">
  export let text: string = '';
</script>

<button>{text}</button>

<style lang="sass">
  button
    padding: 0.5rem 1.5rem
    background-color: transparent
    border: 1px solid var(--primary-color)
    border-radius: var(--radius)
    color: var(--primary-color)
    font-size: var(--base-font-size)

    &:hover,
    &:focus
      color: var(--secondary-color)
      border-color: var(--secondary-color)
</style>
