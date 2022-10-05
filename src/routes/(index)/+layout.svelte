<script lang="ts">
  import ScrollToTopButton from '$lib/components/ScrollToTopButton.svelte';
  import Footer from '$lib/layout/Footer.svelte';
  import Header from '$lib/layout/Header.svelte';
  import NavigationBar from '$lib/layout/NavigationBar.svelte';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { fab } from '@fortawesome/free-brands-svg-icons';
  import { fas } from '@fortawesome/free-solid-svg-icons';
  import '../../app.sass';
  import { indexMenuItems as menuLinks } from '../../config/menu.config';

  let scrollYValue;

  library.add(fab, fas);
</script>

<Header {menuLinks} />

<svelte:window bind:scrollY={scrollYValue} />

<main>
  <ScrollToTopButton {scrollYValue} />
  <slot />
</main>

<Footer />
<NavigationBar {menuLinks} />

<style lang="sass">
  main
    flex: 1
    display: flex
    flex-direction: column
    width: 100%
</style>
