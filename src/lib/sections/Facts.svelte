<script lang="ts">
  import Heading1 from '$lib/components/Heading1.svelte';
  import SkewedSection from '$lib/components/SkewedSection.svelte';
</script>

<SkewedSection angle={-8}>
  <Heading1>Some Interesting Facts</Heading1>
  <section class="facts">
    <section class="fact-container">
      <span class="number">127</span>
      <span class="fact">Finished Projects</span>
    </section>
    <section class="fact-container">
      <span class="number">321</span>
      <span class="fact">Happy Customers</span>
    </section>
    <section class="fact-container">
      <span class="number">863</span>
      <span class="fact">Freelancing Hours</span>
    </section>
  </section>
</SkewedSection>

<style lang="sass">
  @import '../styles/mixins'

  .facts
    width: 100%
    display: flex
    justify-content: space-between
    flex-wrap: wrap

  .fact-container
    display: flex
    flex-direction: column
    padding: 1rem

    & > .number
      margin-left: 2rem
      margin-bottom: 1rem
      font-size: 2rem
      font-weight: bold

    & > .fact
      position: relative
      text-transform: uppercase
      font-size: 0.8rem
      padding: 0.5rem 1rem
      background-color: var(--bg-color)
      margin-left: 2rem

      &:before
        content: ''
        position: absolute
        top: 50%
        left: -2rem
        width: 1rem
        height: 2px
        background-color: var(--primary-color)
</style>
