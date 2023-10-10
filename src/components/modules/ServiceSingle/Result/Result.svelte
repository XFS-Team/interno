<script lang="ts">
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
</script>

<div data-aos="fade-right"
  data-aos-duration="500"
  class="container flex flex-col lg:flex-row justify-between items-center gap-[82px]"
>
  <img src="/images/ServiceSingle/Result/result.png" alt="result" />
  <div class="flex flex-col items-center lg:items-start">
    <Title
      class="text-center lg:text-left text-[25px] lg:text-[50px] tracking-[1px]"
      >We love design. That's how we got here.</Title
    >
    <Text class="text-center lg:text-left mt-[11px]"
      >It is a long established fact that a reader will be distracted by the of
      readable content .</Text
    >
    <Button class="mt-8 py-[26px] px-10 flex items-center gap-[13px]">
      <Text intent="secondary" color="secondary">Our Portfolio</Text>
      <img src="/images/arrow_right.svg" alt="arrowRight" />
    </Button>
  </div>
</div>
