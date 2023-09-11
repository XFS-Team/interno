<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
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
</script>

<div class="container">
  <div class="flex flex-col justify-between items-center">
    <Title class="text-[50px] text-center tracking-[1px]">Articles & News</Title
    >
    <Text class="max-w-[811px] mt-3 text-center"
      >It is a long established fact that a reader will be distracted by the of
      readable content of a page when lookings at its layouts the points of
      using.</Text
    >
  </div>
  <div class="mt-[52px] flex justify-between items-center gap-[27px]">
    {#each blogs as blog}
      <BlogItem {...blog} />
    {/each}
  </div>
</div>
