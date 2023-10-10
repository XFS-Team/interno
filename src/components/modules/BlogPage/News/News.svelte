<script lang="ts">
  import Title from "../../../common/Title/Title.svelte";
  import BlogItem from "../../Blog/BlogItem.svelte";

  const blogs = [
    {
      image: "/images/Blog/blog_1.png",
      tag: "Kitchan Design",
      content: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022",
    },
    {
      image: "/images/Blog/blog_2.png",
      tag: "Living Design ",
      content: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022",
    },
    {
      image: "/images/Blog/blog_3.png",
      tag: "Interior Design",
      content: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022",
    },
    {
      image: "/images/Blog/blog_4.png",
      tag: "Kitchan Design",
      content: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022",
    },
    {
      image: "/images/Blog/blog_5.png",
      tag: "Living Design ",
      content: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022",
    },
    {
      image: "/images/Blog/blog_6.png",
      tag: "Interior Design",
      content: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022",
    },
  ];
</script>

<div
  data-aos="fade-right"
  data-aos-duration="500"
  class="container mt-[100px] lg:mt-[150px]"
>
  <Title
    class="text-[25px] lg:text-[50px] text-center lg:text-left tracking-[1px]"
    >Articles & News</Title
  >
  <div
    class="mt-[30px] flex flex-wrap flex-col lg:flex-row justify-between items-center gap-[28px]"
  >
    {#each blogs as blog}
      <BlogItem {...blog} />
    {/each}
  </div>
</div>
