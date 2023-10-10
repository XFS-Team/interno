<script lang="ts">
  import ClientLogoItem from "./ClientLogoItem.svelte";

  const images = [
    "client_1.svg",
    "client_2.svg",
    "client_3.svg",
    "client_4.svg",
    "client_5.svg",
  ];
</script>

<div
  data-aos="fade-up"
  data-aos-duration="500"
  class="container my-[100px] lg:my-[150px] flex flex-col lg:flex-row justify-center items-center gap-[108px]"
>
  {#each images as image}
    <ClientLogoItem {image} />
  {/each}
</div>
