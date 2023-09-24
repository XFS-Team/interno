<script lang="ts">
  import Work from "../../Work/Work.svelte";
  import WorkItem from "../../Work/WorkItem.svelte";

  const titles = [
    { title: "2d/3d Art Work", class: "px-5 py-[83px]" },
    {
      title: "Interior Work",
      class: "bg-pale-cream px-5 py-[83px] rounded-[30px]",
    },
    { title: "Decoration Work", class: "px-5 py-[83px]" },
  ];
</script>

<div class="container">
  <div class="mb-[50px] lg:mb-[200px]">
    <Work />
    <div class="flex flex-col lg:flex-row items-center mt-[88px]">
      {#each titles as title}
        <WorkItem {...title} />
      {/each}
    </div>
  </div>
</div>
