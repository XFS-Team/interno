<script lang="ts">
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
</script>

<div data-aos="fade-up" class="container lg:relative">
  <img src="/images/Homepage/Banner/banner.png" alt="bannerImage" />
  <div
    class="flex flex-col items-center lg:items-start lg:absolute top-[40px] lg:top-[120px] xl:top-[208px] left-[52px]"
  >
    <div class="flex flex-col items-center lg:items-start max-w-[434px]">
      <Title
        class="text-center mt-5 lg:mt-0 lg:text-left text-[25px] lg:text-[65px]"
        >Let Your Home Be Unique</Title
      >
      <div>
        <Text class="text-center lg:text-left mt-[18px]">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </Text>
        <Text class="text-center lg:text-left mt-[18px]">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </Text>
      </div>
    </div>
    <div>
      <Button
        class="mt-[21px] py-[26px] pl-12 pr-[49px] flex items-center gap-2.5"
      >
        <Text intent="secondary" color="secondary">Get Started</Text>
        <img src="/images/arrow_right.svg" alt="arrowRight" />
      </Button>
    </div>
  </div>
</div>
