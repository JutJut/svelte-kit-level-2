<script lang="ts">
  export let label: string = '';
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label><span>{label}</span><slot /></label>

<style lang="sass">
  label
    display: flex
    flex-direction: column
    gap: 0.5rem
</style>
