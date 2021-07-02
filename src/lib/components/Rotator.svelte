<script lang="ts">
  const emojis = ['☕', '🍕', '🍺', '🍜', '💖'];
  // emojis must be an array of 5 emoji characters,
  // if you want more or less emojis you have to adjust the animation accordingly
</script>

<div>
  <span>{emojis.join(' ')}</span>
</div>

<style>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.8rem 0.25rem;
    height: 1rem;
    width: 1rem;
    overflow: hidden;
  }

  @keyframes slide {
    0%,
    10% {
      transform: translateY(40%);
    }

    20%,
    30% {
      transform: translateY(20%);
    }

    40%,
    50% {
      transform: translateY(0%);
    }

    60%,
    70% {
      transform: translateY(-20%);
    }

    80%,
    90%,
    100% {
      transform: translateY(-40%);
    }
  }

  span {
    animation: slide 8s infinite alternate ease-in-out;
  }
</style>
