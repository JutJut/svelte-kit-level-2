<script>
  import Heading1 from '$lib/components/Heading1.svelte';
  import Section from '$lib/components/Section.svelte';
  // import { DarkPaginationNav, paginate } from 'svelte-paginate';

  export let projects = [];

  let items = projects;
  let currentPage = 1;
  let pageSize = 2;
  // $: paginatedProjects = paginate({ items, pageSize, currentPage });
</script>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<Section full={true}>
  <Heading1>Projects</Heading1>
  <!-- {#each paginatedProjects as project}
    <h2 class="title">{project.title}</h2>
    FIXME: change content
    {@html project.content}
    <TechList techs={project.techs} />
  {/each} -->

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
