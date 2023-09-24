<script lang="ts">
  import CategoryItem from "./CategoryItem.svelte";

  const categories = [
    {
      name: "Bathroom",
      bgColor: "",
      textColor: "text-dark-gray",
    },
    {
      name: "Bed Room",
      bgColor: "bg-primary",
      textColor: "text-white",
    },
    {
      name: "Bed Room",
      bgColor: "",
      textColor: "text-dark-gray",
    },
    {
      name: "Living Area",
      bgColor: "",
      textColor: "text-dark-gray",
    },
  ];
</script>

<div
  class="w-full lg:w-[900px] lg:h-[75px] rounded-[18px] border-[1px] border-solid border-primary flex flex-col lg:flex-row items-center justify-center mx-auto"
>
  {#each categories as category}
    <CategoryItem {...category} />
  {/each}
</div>
