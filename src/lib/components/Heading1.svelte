<h1><slot /></h1>

<style lang="sass">
  h1
    width: 100%
    position: relative
    font-weight: 800
    margin: 20px 0

    &:first-letter
      color: var(--primary-color)

    &:after
      background-color: var(--primary-color)
      content: ''
      position: absolute
      top: -30px
      left: 0
      width: 30px
      height: 2px
</style>
