<script lang="ts">
  import About from '$lib/sections/About.svelte';
  import CardGrid from '$lib/sections/CardGrid.svelte';
  import Contact from '$lib/sections/Contact.svelte';
  import Facts from '$lib/sections/Facts.svelte';
  // import FeaturedProjects from '$lib/sections/FeaturedProjects.svelte';
  import Hero from '$lib/sections/Hero.svelte';
  // import RecentPosts from '$lib/sections/RecentPosts.svelte';

  /** @type {import('./$types').PageData} */
  export let data;

  const { hero = {}, facts = {}, about = {}, cardGrid = {}, contact = {} } = data;
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<Hero
  introduction={hero.introduction}
  author={hero.author}
  tagline={hero.tagline}
  content={hero.content}
/>

<Facts title={facts.title} angle={facts.angle} facts={facts.facts} />

<About title={about.title} techs={about.techs} imageUrl={about.image} content={about.content} />

<CardGrid cards={cardGrid.cards} content={cardGrid.content} />

<!--

<FeaturedProjects {projects} />

<RecentPosts {posts} /> -->

<Contact
  address={contact.address}
  phone={contact.phone}
  email={contact.email}
  content={contact.content}
/>
