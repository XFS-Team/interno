<script lang="ts">
  import Title from "../../../common/Title/Title.svelte";
  import TagItem from "./TagItem.svelte";

  const title = "Tags";

  const tags = [
    {
      nameTag: "Kitchen",
      textColor: "text-white",
      class: "py-[9px] px-[30px] bg-dark-gray",
    },
    {
      nameTag: "Bedroom",
      textColor: "text-dark-gray",
      class: "py-[9px] px-[30px] bg-pale-cream",
    },
    {
      nameTag: "Building",
      textColor: "text-dark-gray",
      class: "py-[9px] px-[30px] bg-pale-cream",
    },
    {
      nameTag: "Architecture",
      textColor: "text-dark-gray",
      class: "py-[9px] px-[30px] bg-pale-cream",
    },
    {
      nameTag: "Kitchen Planning",
      textColor: "text-dark-gray",
      class: "py-[9px] px-[30px] bg-pale-cream",
    },
    {
      nameTag: "Bedroom",
      textColor: "text-dark-gray",
      class: "py-[9px] px-[30px] bg-pale-cream",
    },
  ];
</script>

<div>
  <Title class="text-[25px] tracking-[0.5px] mb-6">{title}</Title>
  <div class="flex flex-wrap gap-x-2.5 gap-y-[11px]">
    {#each tags as tag}
      <TagItem {...tag} />
    {/each}
  </div>
</div>
