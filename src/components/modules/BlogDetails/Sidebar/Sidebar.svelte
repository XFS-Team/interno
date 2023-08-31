<script lang="ts">
  import Categories from "../Categories/Categories.svelte";
  import LatestNews from "../LatestNews/LatestNews.svelte";
  import Search from "../Search/Search.svelte";
  import Tag from "../Tag/Tag.svelte";
</script>

<div class="flex flex-col w-[345px] gap-y-[50px]">
  <Search />
  <LatestNews />
  <Categories />
  <Tag />
</div>
