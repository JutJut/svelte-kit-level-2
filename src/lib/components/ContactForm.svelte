<script>
  import InputText from '$lib/components/form/InputText.svelte';
  import InputTextarea from '$lib/components/form/InputTextarea.svelte';
  import FormButton from '$lib/components/form/FormButton.svelte';
</script>


  <form class="form" autocomplete="off">
    <InputText name="email" placeholder="E-mail" label="E-mail"/>
    <InputTextarea name="message" placeholder="Message . . ." label="Message"/>
    <FormButton value="Send" />
  </form>


<style lang="sass">
  .form
    display: flex
    flex-direction: column
    padding: 0.25rem
    margin: 0 auto
    gap: 0.5rem
</style>