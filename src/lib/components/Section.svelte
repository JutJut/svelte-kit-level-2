<script lang="ts">
  export let id = null;
  export let full = false; // determines if the section is full height
</script>

<section {id} class:full><slot /></section>

<style lang="sass">
  @import '../styles/mixins'

  section
    display: flex
    justify-content: start
    align-items: flex-start
    flex-direction: column
    margin: 0 auto
    width: 90%
    padding: 30px 0
    max-width: 1000px
    margin-bottom: 60px

    &.full
      position: relative
      min-height: calc(100vh - 2 * var(--header-height))
      justify-content: center

      @include mq-gt-sm
        min-height: calc(100vh - var(--header-height))
</style>
