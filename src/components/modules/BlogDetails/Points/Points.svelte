<script lang="ts">
  import PointItem from "./PointItem.svelte";

  const pointItems = [
    {
      number: 1,
      content:
        "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      number: 2,
      content:
        "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
    {
      number: 3,
      content:
        "Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
    },
  ];
</script>

<div class="flex flex-col gap-8">
  {#each pointItems as pointItem}
    <PointItem {...pointItem} />
  {/each}
</div>
