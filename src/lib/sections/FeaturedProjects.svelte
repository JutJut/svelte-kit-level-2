<script lang="ts">
  import FeaturedProject from '$lib/components/FeaturedProject.svelte';
  import Heading1 from '$lib/components/Heading1.svelte';
  import Section from '$lib/components/Section.svelte';
  import TextLink from '$lib/components/TextLink.svelte';

  export let projects;
</script>

<Section id="projects">
  <Heading1>Featured Projects</Heading1>
  <article class="projects">
    {#each projects as project}
      <FeaturedProject {project} />
    {/each}
  </article>
  <div class="link-container"><TextLink link="/projects" label="View More Projects" /></div>
</Section>

<style lang="sass">
  @import '../styles/mixins'

  .link-container
    @include flex-center
    width: 100%
    margin-top: 2.5rem
</style>
