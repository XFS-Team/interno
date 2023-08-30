<script lang="ts">
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
</script>

<div class="container my-[200px] flex items-center justify-between gap-[75px]">
  <div class="max-w-[472px]">
    <Title class="mt-[43px] text-[50px]">
      We Create The Art Of Stylish Living Stylishly
    </Title>
    <Text class="mt-[33px]">
      It is a long established fact that a reader will be distracted by the of
      readable content of a page when lookings at its layouts the points of
      using that it has a more-or-less normal.
    </Text>
    <div
      class="mt-[45px] flex items-center justify-start gap-[15px] max-w-[277px]"
    >
      <div>
        <img src="/images/Homepage/AboutUs/phone.svg" alt="phone" />
      </div>
      <div>
        <Text
          intent="secondary"
          class="text-[24px] font-[700] tracking-[0.24px]">012345678</Text
        >
        <Text>Call Us Anytime</Text>
      </div>
    </div>
    <div class="mt-[47px]">
      <Button
        class="mt-[21px] py-[26px] px-[31px] flex items-center gap-2.5"
      >
        <Text intent="secondary" color="secondary">Get Free Estimate</Text>
        <img src="/images/arrow_right.svg" alt="arrowRight" />
      </Button>
    </div>
  </div>
  <div>
    <img src="/images/Homepage/AboutUs/about_us.png" alt="aboutUsImage" />
  </div>
</div>
