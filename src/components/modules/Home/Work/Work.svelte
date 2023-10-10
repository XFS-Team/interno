<script lang="ts">
  import WorkItem from "../../Work/WorkItem.svelte";
  const titles = ["Project Plan", "Interior Work", "Realization"];
</script>

<div
  {...$$props}
  class="container lg:my-[120px] flex flex-col md:flex-row justify-center items-center gap-[42px] {$$props.class}"
  data-aos="fade-right"
  data-aos-duration="500"
>
  {#each titles as title}
    <WorkItem {title} />
  {/each}
</div>
