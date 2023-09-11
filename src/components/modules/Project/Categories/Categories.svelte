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
  class="max-w-[900px] rounded-[18px] border-[1px] border-solid border-primary flex items-center justify-center mx-auto"
>
  {#each categories as category}
    <CategoryItem {...category} />
  {/each}
</div>
