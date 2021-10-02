<script context="module" lang="ts">
  import { base } from '$app/paths';
  import About from '$lib/sections/About.svelte';
  import CardGrid from '$lib/sections/CardGrid.svelte';
  import Contact from '$lib/sections/Contact.svelte';
  import FeaturedProjects from '$lib/sections/FeaturedProjects.svelte';
  import Hero from '$lib/sections/Hero.svelte';
  import RecentPosts from '$lib/sections/RecentPosts.svelte';

  export const prerender = true;

  export async function load({ fetch }) {
    const data = await fetch(`${base}/index.json`).then((r) => r.json());
    return {
      props: { data },
    };
  }
</script>

<script lang="ts">
  export let data;
  const { hero, about, cardGrid, contact, projects, recentPosts: posts } = data;
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

<About title={about.title} techs={about.techs} imageUrl={about.image} content={about.content} />

<CardGrid cards={cardGrid.cards} content={cardGrid.content} />

<FeaturedProjects {projects} />

<RecentPosts {posts} />

<Contact
  address={contact.address}
  phone={contact.phone}
  email={contact.email}
  content={contact.content}
/>
