<script>
  import Footer from './Footer.svelte';
  import ProgressBar from './ProgressBar.svelte';

  export let appName;
</script>

<div class="content-wrapper">
  <main>
    <h1>{appName}</h1>
    <p>Time Flies Like an Arrow...</p>
    <ProgressBar />
  </main>

  <Footer />
</div>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: capitalize;
    font-size: 3.5em;
    font-weight: 100;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }

    h1 {
      font-size: 4em;
    }
  }
</style>
