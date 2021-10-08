<script>
  import FormField from '$lib/components/form/FormField.svelte';
  import Label from '$lib/components/form/Label.svelte';
  import InputText from '$lib/components/form/InputText.svelte';
  import InputTextarea from '$lib/components/form/InputTextarea.svelte';
  import FormButton from '$lib/components/form/FormButton.svelte';
</script>


  <form class="form" autocomplete="off">
    <FormField>
      <Label value="E-mail" forName="email"/>
      <InputText name="email" placeholder="E-mail"/>
    </FormField>
    <FormField>
      <Label value="Message" forName="message"/>
      <InputTextarea name="message" placeholder="Message . . ."/>
    </FormField>    
    <FormButton value="Send" />
  </form>


<style lang="sass">
  .form
    display: flex
    flex-direction: column
    padding: 4px 4px 30px 4px
    margin: 0 auto
    gap: 0.5rem
</style>