<script lang="ts">
  import Banner from "../../Banner/Banner.svelte";

  const banner = {
    image: "/images/BlogPage/Banner/banner.png",
    title: "Articles & News",
    pageName: "Home / Blog",
    class: "py-[41px] px-[78px]"
  };
</script>

<Banner {...banner} />
