<script lang="ts">
  import Work from "../../Home/Work/Work.svelte";
  import WorkItem from "../../Work/WorkItem.svelte";

  const titles = [
    "Project Plan",
    "Interior Work",
    "Realization",
    "2d/3d Art Work",
    "Interior Work",
    "Decoration Work",
  ];
</script>

<div
  data-aos="fade-right"
  class="container mt-[70px] lg:mt-[120px] flex flex-col md:flex-row justify-center items-center gap-[42px]"
>
  <div class="mb-[50px] lg:mb-[200px]">
    <div
      class="lg:flex-row flex-wrap items-center flex flex-col md:flex-row justify-center gap-x-[42px]"
    >
      {#each titles as title}
        <WorkItem {title} />
      {/each}
    </div>
  </div>
</div>
