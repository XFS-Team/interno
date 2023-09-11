<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
  import DetailItem from "./DetailItem.svelte";

  const details = [
    {
      title: "Client",
      content: "Your client name",
    },
    {
      title: "Category",
      content: "Interiors",
    },
    {
      title: "Tags",
      content: "interior, Home",
    },
    {
      title: "Date",
      content: "Date 23,02, 2022",
    },
    {
      title: "Link",
      content: "Link example.com",
    },
  ];
</script>

<div
  class="container my-[200px] flex flex-col items-center justify-between gap-[100px]"
>
  <div class="flex items-center justify-between gap-[42px]">
    <div class="py-[55px] px-[84px] rounded-[70px] bg-pale-cream">
      {#each details as detail}
        <DetailItem {...detail} />
      {/each}
    </div>
    <div class="flex flex-col gap-[11px]">
      <Title class="text-[50px]">Minimal Look Bedrooms</Title>
      <Text
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem
        vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel
        maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh
        in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel
        lectus bibendum commodo.</Text
      >
      <Text class="mt-5"
        >In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet
        tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque
        arcu. Donec a pellentesque Cras erat enim, gravida non ante
        vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus
        vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.</Text
      >
    </div>
  </div>
  <div class="relative">
    <img
      src="/images/ProjectDetails/Details/project_details.png"
      alt="projectDetails"
    />
    <img
      class="absolute inset-0 mx-auto my-auto"
      src="/images/ProjectDetails/Details/zoom_icon.svg"
      alt="zoom"
    />
  </div>
</div>
