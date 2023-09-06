<script>
  import WorkItem from "./WorkItem.svelte";
  const titles = ["Project Plan", "Interior Work", "Realization"];
</script>

<div
  {...$$props}
  class="container mt-[200px] flex justify-center items-center gap-[42px] {$$props.class}"
>
  {#each titles as title}
    <WorkItem {title} />
  {/each}
</div>
