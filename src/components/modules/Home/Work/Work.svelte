<script>
  import WorkContent from "./WorkItem.svelte";
  let titles = ["Project Plan", "Interior Work", "Realization"];
</script>

<div class="container my-[200px] flex justify-center items-center gap-[42px]">
  {#each titles as title}
    <WorkContent {title} />
  {/each}
</div>
