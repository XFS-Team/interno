<script lang="ts">
  import Banner from "../../Banner/Banner.svelte";

  const banner = {
    image: "/images/Project/Banner/banner.png",
    title: "Our Project",
    pageName: "Home / Project",
    class: "py-[41px] px-[95px]",
  };
</script>

<Banner {...banner} />
