<script lang="ts">
  import Title from "../../../common/Title/Title.svelte";
  import BlogItem from "../../Blog/BlogItem.svelte";

  const blogs = [
    {
      image: "/images/Blog/blog_1.png",
      tag: "Kitchan Design",
      content: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022",
      colorArrow: "default",
    },
    {
      image: "/images/Blog/blog_2.png",
      tag: "Living Design ",
      content: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022",
      colorArrow: "white",
      class: "bg-[#F4F0EC]",
    },
    {
      image: "/images/Blog/blog_3.png",
      tag: "Interior Design",
      content: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022",
      colorArrow: "default",
    }, 
  ];

  const blogs2 = [
        {
      image: "/images/Blog/blog_4.png",
      tag: "Kitchan Design",
      content: "Let’s Get Solution For Building Construction Work",
      date: "26 December,2022",
      colorArrow: "default",
    },
    {
      image: "/images/Blog/blog_5.png",
      tag: "Living Design ",
      content: "Low Cost Latest Invented Interior Designing Ideas.",
      date: "22 December,2022",
      colorArrow: "white",
    },
    {
      image: "/images/Blog/blog_6.png",
      tag: "Interior Design",
      content: "Best For Any Office & Business Interior Solution",
      date: "25 December,2022",
      colorArrow: "default",
    }, 
  ]
</script>

<div class="container mt-[150px]">
  <Title class="text-[50px] tracking-[1px]">Articles & News</Title>
  <div class="mt-[30px] flex justify-between items-center gap-[28px]">
    {#each blogs as blog}
      <BlogItem {...blog} />
    {/each}
  </div>

  <div class="mt-[30px] flex justify-between items-center gap-[28px]">
    {#each blogs2 as blog}
      <BlogItem {...blog} />
    {/each}
  </div>
</div>
