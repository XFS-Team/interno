<script lang="ts">
  import Button from "../../common/Button/Button.svelte";
  import Text from "../../common/Text/Text.svelte";
  import Title from "../../common/Title/Title.svelte";
</script>

<div
  class="container flex flex-col gap-y-[30px] lg:gap-y-0 lg:flex-row items-center justify-between"
>
  <div class="flex flex-col items-center lg:items-start lg:mr-[81px]">
    <Title class="text-primary text-[100px] lg:text-[250px] leading-[125%]"
      >404</Title
    >
    <Title
      class="lg:w-[569px] mt-[15px] text-[35px] leading-[150%] tracking-[0.35px]"
      >We are sorry, but the page you requested was not found</Title
    >
    <a href="/">
      <Button class="mt-[23px] px-[54px] py-[26px] flex items-center gap-[9px]">
        <Text intent="secondary" color="secondary">Back To Home</Text>
        <img src="/images/arrow_right.svg" alt="arrowRight" />
      </Button>
    </a>
  </div>
  <img
    class="lg:w-[913px] mb-[20px] lg:mb-0"
    src="/images/404/404.png"
    alt="404img"
  />
</div>
