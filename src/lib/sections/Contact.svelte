<script lang="ts">
  import ContactDetails from '$lib/components/ContactDetails.svelte';
  import ContactForm from '$lib/components/ContactForm.svelte';
  import Heading1 from '$lib/components/Heading1.svelte';
  import Section from '$lib/components/Section.svelte';

  export let phone;
  export let email;
  export let address;
  export let content;
</script>

<Section id="contact">
  <Heading1>Contact Details</Heading1>
  <div class="description">
    <svelte:component this={content} />
  </div>
  <div class="separator" />
  <ContactDetails {phone} {email} {address} />
  <ContactForm />
</Section>

<style lang="sass">
  .description
    white-space: pre-line
    width: 100%
    margin-left: 3px

  .separator
    height: 1px
    width: 50%
    background-color: var(--body-color)
</style>
