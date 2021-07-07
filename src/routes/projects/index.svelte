<script context="module">
  import { base } from '$app/paths';
  import Heading1 from '$lib/components/Heading1.svelte';
  import Section from '$lib/components/Section.svelte';
  import TechList from '$lib/components/TechList.svelte';
  export async function load({ fetch }) {
    const projects = await fetch(`${base}/projects.json`).then((r) => r.json());
    return {
      props: { projects },
    };
  }
</script>

<script>
  export let projects;
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<Section full={true}>
  <Heading1>Projects</Heading1>
  {#each projects as project}
    <h2 class="title">{project.title}</h2>
    {@html project.content}
    <TechList techs={project.techs} />
  {/each}
</Section>
