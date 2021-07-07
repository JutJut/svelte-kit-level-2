<script lang="ts">
  import Footer from '$lib/layout/Footer.svelte';
  import Header from '$lib/layout/Header.svelte';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fab } from '@fortawesome/free-brands-svg-icons';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import '../app.sass';

  library.add(fab,fas);
</script>

<Header />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    box-sizing: border-box;
  }
</style>
