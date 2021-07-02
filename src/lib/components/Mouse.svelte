<div class="container">
  <span>Scroll down</span>
  <div class="mouse">
    <div class="scroller" />
  </div>
</div>

<style lang="sass">
  @import '../styles/mixins'

  .container
    @include flex-center
    flex-direction: column
    position: absolute
    bottom: 20px
    left: 0
    right: 0
    width: 100%

    display: none

    @include mq-gt-xs
      display: flex

    >span
      font-size: 0.7rem
      margin: 20px 0

  .mouse
    width: 20px
    height: 30px
    padding: 0 6px
    border: 2px solid var(--title-color)
    border-radius: 20px

  @keyframes scroll
    0%
      opacity: 0
    10%
      transform: translateY(0)
      opacity: 1
    100%
      transform: translateY(10px)
      opacity: 0

  .scroller
    position: relative
    left: 50%
    top: 6px
    margin-left: -1px
    width: 2px
    height: 6px
    background: var(--primary-color)
    border-radius: 25%
    animation-name: scroll
    animation-duration: 2.2s
    animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94)
    animation-iteration-count: infinite
</style>
