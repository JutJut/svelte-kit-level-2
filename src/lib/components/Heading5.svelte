<h5><slot /></h5>

<style lang="sass">
  h5
    color: var(--title-color)
    margin: 20px 0
    position: relative

    &:after
      background-color: var(--primary-color)
      content: ''
      position: absolute
      top: -20px
      left: 0
      width: 30px
      height: 2px
</style>
