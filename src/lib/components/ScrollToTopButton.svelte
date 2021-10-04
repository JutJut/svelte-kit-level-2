<script lang="ts">
  export let scrollYValue;
  import { FontAwesomeIcon } from 'fontawesome-svelte';
  import { fade } from 'svelte/transition';
</script>

{#if scrollYValue >= 1000}
  <div class="back-to-top-wrapper" in:fade={{duration: 200}} out:fade={{duration: 200}}>
    <a href="#top" class="back-to-top-link" aria-label="Scroll to Top">
      <FontAwesomeIcon icon={['fas', 'arrow-up']}/>
    </a>
  </div>
{/if}
<style lang="scss">
@import '../styles/variables.sass';

$scrollLength: 100vh;

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}

.back-to-top-wrapper {
  position: absolute;
  top: $scrollLength;
  right: 0.25rem;
  bottom: -5em;
  width: 3em;
  pointer-events: none;
  z-index: 9999;
}

.back-to-top-link {
  position: fixed;
  pointer-events: all;
  top: calc(100vh - 15rem);
  left: calc(100vw - 5rem);
  text-decoration: none;
  font-size: 2rem;
  line-height: 3rem;
  text-align: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  padding: 0.25rem;

  border: 1px solid var(--primary-color);
  background-color: var(--bg-content-color);
  transition: 80ms ease-in;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: var(--secondary-color);
    background-color: var(--bg-content-color);
    border-color: var(--secondary-color);
  }

  &:focus {
    outline: none;
    color: var(--primary-color);
    box-shadow: 0 0 0 3px var(--primary-color);;
  }
}

@media only screen and (max-width: 600px) {
  .back-to-top-link {
    top: calc(100vh - 17rem);
    left: calc(100vw - 2.2rem);
    font-size: 1.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 15%;
  }
}

@media screen and (max-width: 959px) and (min-width: 601px) {  
  .back-to-top-link {
    top: calc(100vh - 17rem);
    left: calc(100vw - 2.5rem);
    font-size: 1.5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 15%;
  }
}

@media screen and (min-width: 959px) and (max-width: 1999px) {  
  .back-to-top-link {
    top: calc(100vh - 17rem);
    left: calc(100vw - 3rem);
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 15%;
  }
}

</style>