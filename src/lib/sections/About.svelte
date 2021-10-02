<script lang="ts">
  import Heading1 from '$lib/components/Heading1.svelte';
  import Heading2 from '$lib/components/Heading2.svelte';
  import Section from '$lib/components/Section.svelte';
  import TechList from '$lib/components/TechList.svelte';
  import Lazy from 'svelte-lazy';

  export let title;
  export let techs;
  export let content;
  export let imageUrl;
</script>

<Section id="about">
  <Heading1>About Me</Heading1>
  <article>
    <Lazy height={200}>
      <img width="100%" alt="me" src={imageUrl} />
    </Lazy>
    <div>
      <Heading2>{title}</Heading2>
      <div class="content">{@html content}</div>
      <TechList {techs} />
    </div>
  </article>
</Section>

<style lang="sass">
  @import '../styles/mixins'

  article
    display: grid
    grid-template-columns: repeat(1, 1fr)
    grid-gap: 2.5rem
    padding: 2.5rem 0

    @include mq-gt-xs
      grid-template-columns: repeat(2, 1fr)
</style>
