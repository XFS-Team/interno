<script lang="ts">
  import WorkItem from "./WorkItem.svelte";
  const titles = ["Project Plan", "Interior Work", "Realization"];
</script>

<div
  {...$$props}
  class="container mt-[100px] lg:mt-[200px] flex flex-col md:flex-row justify-center items-center gap-[42px] {$$props.class}"
>
  {#each titles as title}
    <WorkItem {title} />
  {/each}
</div>
