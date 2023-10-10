<script lang="ts">
  import Title from "../../../common/Title/Title.svelte";
  import NewsItem from "./NewsItem.svelte";

  const title = "Latest News";
  const newsList = [
    { title: "We Focus On Comfort And Gorgeous", date: "06/02/2020" },
    { title: "We Focus On Comfort And Gorgeous", date: "06/02/2020" },
    { title: "We Focus On Comfort And Gorgeous", date: "06/02/2020" },
  ];
</script>

<div data-aos="fade-left"
  data-aos-duration="500" class="flex flex-col items-start w-full">
  <Title class="text-[25px] tracking-[0.5px] mb-[33px]">{title}</Title>
  <div class="flex flex-col w-full gap-y-[34px]">
    {#each newsList as news}
      <NewsItem {...news} />
    {/each}
  </div>
</div>
