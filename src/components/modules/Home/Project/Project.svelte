<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
  import ProjectItem from "./ProjectItem.svelte";

  const projects = [
    {
      image: "/images/Homepage/Project/project_1.png",
      name: "Modern Kitchan",
      description: "Decor / Artchitecture",
    },
    {
      image: "/images/Homepage/Project/project_2.png",
      name: "Modern Kitchan",
      description: "Decor / Artchitecture",
    },
    {
      image: "/images/Homepage/Project/project_3.png",
      name: "Modern Kitchan",
      description: "Decor / Artchitecture",
    },
    {
      image: "/images/Homepage/Project/project_4.png",
      name: "Modern Kitchan",
      description: "Decor / Artchitecture",
    },
  ];
</script>

<div class="container">
  <div class="flex flex-col justify-between items-center">
    <Title class="text-[35px] lg:text-[50px] text-center tracking-[1px]"
      >Follow Our Projects</Title
    >
    <Text class="max-w-[737px] mt-2 text-center">
      It is a long established fact that a reader will be distracted by the of
      readable content of page lookings at its layouts points.
    </Text>
  </div>

  <div class="mt-[93px] flex flex-col items-center gap-y-[20px] lg:grid lg:grid-cols-2 lg:gap-x-[104px] lg:gap-y-[56px]">
    {#each projects as project}
      <ProjectItem {...project} />
    {/each}
  </div>
</div>
