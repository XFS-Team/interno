<script>
  import Pagination from "../../Pagination/Pagination.svelte";
  import Categories from "../Categories/Categories.svelte";
  import ProjectItem from "./ProjectItem.svelte";

  const projects = [
    {
      image: "/images/Project/Project/project_1.png",
      name: "Minimal Bedroom",
      description: "Decor / Artchitecture",
    },
    {
      image: "/images/Project/Project/project_2.png",
      name: "Classic Minimal Bedroom",
      description: "Decor / Artchitecture",
    },
    {
      image: "/images/Project/Project/project_3.png",
      name: "Minimal Bedroom table",
      description: "Decor / Artchitecture",
    },
    {
      image: "/images/Project/Project/project_4.png",
      name: "Modern Medroom",
      description: "Decor / Artchitecture",
    },
    {
      image: "/images/Project/Project/project_5.png",
      name: "Minimal Bedroom",
      description: "Decor / Artchitecture",
    },

    {
      image: "/images/Project/Project/project_6.png",
      name: "Modern Bedroom",
      description: "Decor / Artchitecture",
    },

    {
      image: "/images/Project/Project/project_7.png",
      name: "System Table",
      description: "Decor / Artchitecture",
    },

    {
      image: "/images/Project/Project/project_8.png",
      name: "Modern Bedroom",
      description: "Decor / Artchitecture",
    },
  ];
</script>

<div class="container my-[200px] flex flex-col items-center">
  <Categories />
  <div class="my-[61px] max-h-[3250px] flex flex-col flex-wrap gap-[35px]">
    {#each projects as project}
      <ProjectItem {...project} />
    {/each}
  </div>
  <Pagination />
</div>
