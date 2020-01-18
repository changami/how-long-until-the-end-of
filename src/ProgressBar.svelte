<style>
  .progress-bar {
    margin-top: 96px;
    margin-bottom: 96px;
  }

  progress {
    display: block;
    width: 70%;
    margin: 0 15%;
  }
</style>

<div class="progress-bar">
  <p>
    We have already spent <b>{(currentProgressRate * 100).toFixed(5)}%</b>
    to the end of {accessedTime.getFullYear()}.
  </p>
  <progress value={$progress}></progress>
</div>

<script>
  import { onDestroy, onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const accessedTime = new Date();
  const startTime = new Date(`${accessedTime.getFullYear()}/01/01 00:00:00`);
  const endTime = new Date(`${accessedTime.getFullYear()}/12/31 23:59:59`);
  const progress = writable(0);

  let currentTime;
  let currentProgressRate;
  let intervalId;

  onMount(() => {
    updateStatus();
    intervalId = setInterval(updateStatus, 1000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });

  function calcProgressRate(start, end, current) {
    return (current.getTime() - start.getTime()) / (end.getTime() - start.getTime());
  }

  function updateStatus() {
    currentTime = new Date();
    currentProgressRate = calcProgressRate(startTime, endTime, currentTime);
    progress.set(currentProgressRate.toFixed(7));
  }
</script>
