<script>
  export let src; 
  export let alt; 
  export let width=''; 
  export let height=''; 
  export let animated=false;
</script>

<img width={width} height={height} alt={alt} src={src} class:animated />

<style lang="sass">
  @import '../styles/mixins.sass'
  .animated
    @include hover-scale
</style>