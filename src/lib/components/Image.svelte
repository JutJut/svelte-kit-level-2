<script>
  export let src;
  export let alt;
  export let width = '';
  export let height = '';
  export let animated = false;
  export let decorated = false;
</script>

<div class="image-wrapper" class:animated class:decorated>
  <img {width} {height} {alt} {src} />
</div>

<style lang="sass">
  @import '../styles/mixins.sass'
  .animated
    @include img-hover-scale
  .decorated
    @include img-border-decoration
</style>
