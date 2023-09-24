<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
</script>

<div>
  <Title
    class="text-[35px] lg:text-[50px] text-center lg:text-left tracking-[1px] mb-[27px]"
    >Latest Post</Title
  >
  <div
    class="p-[22px] flex flex-col lg:flex-row items-center gap-[65px] rounded-[32px] lg:rounded-[62px] border-[1px] border-solid border-[#E7E7E7] shadow-[0_10px_30px_0_rgba(255,255,255,0.25)]"
  >
    <img src="/images/BlogPage/LatestPost/latest_post.png" alt="latestPost" />
    <div class="max-w-[469px]">
      <Title
        class="text-[25px] tracking-[0.5px] mb-[22px] text-center lg:text-left"
        >Low Cost Latest Invented Interior Designing Ideas</Title
      >
      <Text class="mb-[22px] text-center lg:text-left"
        >Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
        dignissim maximus.posuere in.Contrary to popular belief.</Text
      >
      <Text class="text-center lg:text-left"
        >Lorem Ipsum is not simply random text. It has roots in a piece of
        classica.</Text
      >
      <div class="flex items-center justify-between mt-[41px]">
        <Text>26 December,2022</Text>
        <img
          class="w-[40px] lg:w-[52px]"
          src="/images/arrow_button_default.svg"
          alt="arrowButton"
        />
      </div>
    </div>
  </div>
</div>
