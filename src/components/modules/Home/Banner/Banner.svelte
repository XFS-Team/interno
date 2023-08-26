<script>
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
</script>

<div class="container relative">
  <img src="/images/Homepage/Banner/banner.png" alt="bannerImage" />
  <div class="absolute top-[208px] left-[52px]">
    <div class="max-w-[434px]">
      <Title class="text-[65px]">Let Your Home Be Unique</Title>
      <Text class="mt-[18px]">
        There are many variations of the passages of lorem Ipsum fromavailable,
        majority.
      </Text>
      <Text class="mt-[18px]">
        There are many variations of the passages of lorem Ipsum fromavailable,
        majority.
      </Text>
    </div>
    <div>
      <Button
        class="mt-[21px] py-[26px] pl-[48px] pr-[49px] flex items-center gap-[10px] shadow-gray"
      >
        <Text intent="secondary" color="secondary">Get Started</Text>
        <img src="/images/arrow_right.svg" alt="arrowRight" />
      </Button>
    </div>
  </div>
</div>
