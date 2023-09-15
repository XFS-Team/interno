<script lang="ts">
  import Banner from "../../Banner/Banner.svelte";

  const banner = {
    image: "/images/StyleGuide/Banner/banner.png",
    title: "Style Guide",
    pageName: "Home / Style guide",
    class: "py-[41px] px-[120px]",
  };
</script>

<Banner {...banner} />
