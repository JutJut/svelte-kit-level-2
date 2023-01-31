<script>
  import Heading1 from '$lib/components/Heading1.svelte';
  import ProjectLinks from '$lib/components/ProjectLinks.svelte';
  import Section from '$lib/components/Section.svelte';
  import Separator from '$lib/components/Separator.svelte';
  import TechList from '$lib/components/TechList.svelte';
  // import { DarkPaginationNav, paginate } from 'svelte-paginate';

  export let data = [];
  const { projects } = data;

  // let items = projects;
  // let currentPage = 1;
  // let pageSize = 2;
  // $: paginatedProjects = paginate({ items, pageSize, currentPage });
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<Section full={true}>
  <section class="title">
    <Heading1>Projects</Heading1>
  </section>
  <Separator />
  {#each projects as project}
    <div class="project-title-container">
      <h2 class="title">{project.title}</h2>
      <ProjectLinks
        repoLink={project.repoLink}
        repoLinkLabel={`Project ${project.title} repo link`}
        demoLink={project.demoLink}
        demoLinkLabel={`Project ${project.title} demo link`}
      />
    </div>
    <svelte:component this={project.content} />
    <TechList techs={project.techs} />
  {/each}

  <!-- TODO: Add custom styling -->
  <!-- <DarkPaginationNav
    totalItems={items.length}
    {pageSize}
    {currentPage}
    limit={1}
    showStepOptions={false}
    on:setPage={(e) => (currentPage = e.detail.page)}
  /> -->
</Section>

<style lang="sass">
  .title :global(h1)
    margin-top: 3rem

  .project-title-container
    width: 100%
    display: flex
    align-items: baseline
    justify-content: space-between
</style>
