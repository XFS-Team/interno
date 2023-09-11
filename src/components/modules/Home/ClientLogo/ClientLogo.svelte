<script>
  import ClientLogoItem from "./ClientLogoItem.svelte";

  let images = [
    "client_1.svg",
    "client_2.svg",
    "client_3.svg",
    "client_4.svg",
    "client_5.svg",
  ];
</script>

<div class="container my-[150px] flex justify-center items-center gap-[108px]">
  {#each images as image}
    <ClientLogoItem {image} />
  {/each}
</div>
