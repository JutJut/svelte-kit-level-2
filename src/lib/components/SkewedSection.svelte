<script lang="ts">
  export let id = null;
  export let full = true;
  export let angle = -10;

  // x = tan(α) * a / 2

  $: cssVars = `--angle:${angle}deg;`;
</script>

<section style={cssVars} {id} class:full><div class="content"><slot /></div></section>

<style lang="sass">
  @import '../styles/mixins'

  $skewFactor: 0.09719

  section
    margin: 6rem 0
    position: relative
    padding: calc(100% * $skewFactor) 0

    > .content
      max-width: 1000px
      margin: 0 auto
      padding: 1.5em
      position: relative

    &:after
      content: ''
      position: absolute
      left: 0
      top: 0
      right: 0
      bottom: 0
      z-index: -1
      transform: skewy(var(--angle))
      transform-origin: 50% 0
      outline: 1px solid transparent
      backface-visibility: hidden
      background-color: var(--bg-content-color)
</style>
