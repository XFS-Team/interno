<script lang="ts">
  import BlogDetails from "../BlogDetails/BlogDetails.svelte";
  import Sidebar from "../Sidebar/Sidebar.svelte";
</script>

<div
  data-aos="fade-right"
  data-aos-duration="500"
  class="container flex flex-col-reverse lg:flex-row items-start gap-[52px] my-[50px] lg:my-[200px]"
>
  <BlogDetails />
  <Sidebar />
</div>
