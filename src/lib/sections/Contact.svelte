<script lang="ts">
  import Heading1 from '$lib/components/Heading1.svelte';
  import Section from '$lib/components/Section.svelte';
  import { FontAwesomeIcon } from 'fontawesome-svelte';

  export let phone;
  export let email;
  export let address;
  export let content;
</script>

<Section id="contact">
  <Heading1>Contact Details</Heading1>
  <section class="description">{@html content}</section>
  <div class="separator" />
  <div class="contacts">
    <div class="contact">
      <FontAwesomeIcon
        icon={['fas', 'building']}
        size="lg"
        fixedWidth={true}
        style="margin-right: 0.8rem"
      />
      <section>
        <div class="contact__description">Office Location</div>
        <span class="contact__form">{address}</span>
      </section>
    </div>
    <div class="contact">
      <FontAwesomeIcon
        icon={['fas', 'paper-plane']}
        size="lg"
        fixedWidth={true}
        style="margin-right: 0.8rem"
      />
      <section>
        <div class="contact__description">My E-Mail</div>
        <span class="contact__form">{email}</span>
      </section>
    </div>
    <div class="contact">
      <FontAwesomeIcon
        icon={['fas', 'mobile-alt']}
        size="lg"
        fixedWidth={true}
        style="margin-right: 0.8rem"
      />
      <section>
        <div class="contact__description">Phone Number</div>
        <span class="contact__form">{phone}</span>
      </section>
    </div>
  </div>
</Section>

<style lang="sass">
  @import '../styles/mixins'

  Heading1
    margin-bottom: 70px

  .description
    white-space: pre-line
    width: 100%
    max-width: 500px
    margin-left: 3px

  .separator
    height: 1px
    width: 50%
    background-color: var(--body-color)

  .contacts
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-gap: 30px
    width: 100%
    margin-top: 2rem

    @include mq-gt-xs
      grid-template-columns: repeat(2, 1fr)

    @include mq-gt-sm
      grid-template-columns: repeat(3, 1fr)

    .contact
      display: flex
      align-items: center

      &__description
        color: var(--primary-color)
        font-weight: normal

      &__form
        font-size: 0.8rem
         font-weight: 500
</style>
