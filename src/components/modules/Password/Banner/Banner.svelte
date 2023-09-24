<script lang="ts">
  import Banner from "../../Banner/Banner.svelte";

  const banner = {
    image: "/images/Password/Banner/banner.png",
    title: "Restricted Page",
    pageName: "Home / Restricted Page",
    class: "py-[41px] lg:px-[75px]",
  };
</script>

<Banner {...banner} />
