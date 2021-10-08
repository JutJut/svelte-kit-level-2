<script>
  import Button from '$lib/components/Button.svelte';
  import FormField from '$lib/components/FormField.svelte';
  import Input from '$lib/components/Input.svelte';
  import Textarea from '$lib/components/Textarea.svelte';
</script>

<form class="form" autocomplete="off">
  <FormField label="Your E-Mail">
    <Input name="email" placeholder="example@gmail.com" />
  </FormField>
  <FormField label="Your Message">
    <Textarea name="message" placeholder="Enter Your Text Here..." />
  </FormField>
  <Button text="Send" />
</form>

<style lang="sass">
  .form
    margin-top: 2rem
    width: 100%
    display: flex
    flex-direction: column
    gap: 1rem
</style>
