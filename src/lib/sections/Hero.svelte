<script lang="ts">
  import Mouse from '$lib/components/Mouse.svelte';
  import Section from '$lib/components/Section.svelte';

  export let introduction;
  export let author;
  export let tagline;
  export let content;
</script>

<Section full={true}>
  <div class="introduction">{introduction}</div>
  <h1>{author}</h1>
  <h2>{tagline}</h2>
  <div class="description">{@html content}</div>
  <Mouse />
</Section>

<style lang="sass">
  @import '../styles/mixins'

  .introduction
    color: var(--primary-color)
    font-weight: normal

  h1
    margin-left: -4px !important
    font-size: 40px
    line-height: 1.1
    margin: 0
    word-break: break-word

  h2
    margin-left: -4px !important
    font-size: 40px
    line-height: 1.1
    margin: 0
    color: var(--primary-color)
    word-break: break-word

  h1,h2
    @include mq-gt-xs
      font-size: 80px

  .description
    margin-top: 0.5rem
    width: 100%
    max-width: 500px
</style>
