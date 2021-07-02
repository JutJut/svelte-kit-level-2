<script lang="ts">
  import Links from '$lib/components/Links.svelte';
  import Rotator from '$lib/components/Rotator.svelte';

  let author = 'Knochenmark';
</script>

<footer>
  <div class="container">
    <span class="copyright">© {new Date().getFullYear()} {author}</span>
    <Links />
  </div>
  <div class="rotator-container">Made with<Rotator /></div>
</footer>

<style lang="sass">
  @import '../styles/mixins'

  footer
    @include flex-center
    flex-direction: column
    background-color: var(--bg-content-color)
    padding: calc((var(--space) / 2))
    text-align: center
    font-size: 0.8rem

    @include mq-gt-xs
      flex-direction: row-reverse
      justify-content: space-between

    @include mq-lt-md
      margin-bottom: var(--header-height)

  .container
    @include flex-center
    flex-direction: column
    margin-top: 1rem

    @include mq-gt-xs
      margin-top: 0
      flex-direction: row
      align-items: center

  .copyright
    font-weight: 500
    margin-bottom: 0.8rem

    @include mq-gt-xs
      margin-right: 0.8rem
      margin-bottom: 0

  .rotator-container
    @include flex-center
    margin: 0.8rem 0
    font-size: 0.8rem

    @include mq-gt-xs
      margin: 0
</style>
