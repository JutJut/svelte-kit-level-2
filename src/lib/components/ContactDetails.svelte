<script>
  import { FontAwesomeIcon } from 'fontawesome-svelte';

  export let phone;
  export let email;
  export let address;
</script>

<div class="contact-details">
  <div class="detail">
    <FontAwesomeIcon
      icon={['fas', 'building']}
      size="lg"
      fixedWidth={true}
      style="margin-right: 0.8rem"
    />
    <address>
      <div class="detail__description">Office Location</div>
      <span class="detail__form">{address}</span>
    </address>
  </div>
  <div class="detail">
    <FontAwesomeIcon
      icon={['fas', 'paper-plane']}
      size="lg"
      fixedWidth={true}
      style="margin-right: 0.8rem"
    />
    <address>
      <div class="detail__description">My E-Mail</div>
      <span class="detail__form">{email}</span>
    </address>
  </div>
  <div class="detail">
    <FontAwesomeIcon
      icon={['fas', 'mobile-alt']}
      size="lg"
      fixedWidth={true}
      style="margin-right: 0.8rem"
    />
    <address>
      <div class="detail__description">Phone Number</div>
      <span class="detail__form">{phone}</span>
    </address>
  </div>
</div>

<style lang="sass">
  @import '../styles/mixins'

 .contact-details
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-gap: 30px
    width: 100%
    margin-top: 2rem

    @include mq-gt-xs
      grid-template-columns: repeat(2, 1fr)

    @include mq-gt-sm
      grid-template-columns: repeat(3, 1fr)

    .detail
      display: flex
      align-items: center

      &__description
        color: var(--primary-color)
        font-weight: normal

      &__form
        font-size: 0.8rem
         font-weight: 500
</style>
