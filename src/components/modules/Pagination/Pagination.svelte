<script>
  import PaginationItem from "./PaginationItem.svelte";

  const paginations = [
    {
      image: "/images/Pagination/pagination_current.svg",
      number: "1",
    },
    {
      image: "/images/Pagination/pagination_frame.svg",
      number: "2",
    },
    {
      image: "/images/Pagination/pagination_frame.svg",
      number: "3",
    },
  ];
</script>

<div class="flex items-center gap-5">
  {#each paginations as pagination}
    <PaginationItem {...pagination} />
  {/each}
  <img src="/images/Pagination/pagination_next.svg" alt="arrowNext" />
</div>
