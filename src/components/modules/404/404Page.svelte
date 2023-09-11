<script lang="ts">
  import Button from "../../common/Button/Button.svelte";
  import Text from "../../common/Text/Text.svelte";
  import Title from "../../common/Title/Title.svelte";
</script>

<div class="container flex items-center justify-between">
  <div class="flex flex-col items-start mr-[81px]">
    <Title class="text-primary text-[250px] leading-[125%]">404</Title>
    <Title
      class="w-[569px] mt-[15px] text-[35px] leading-[150%] tracking-[0.35px]"
      >We are sorry, but the page you requested was not found</Title
    >
    <Button class="mt-[23px] px-[54px] py-[26px] flex items-center gap-[9px]">
      <Text intent="secondary" color="secondary">Back To Home</Text>
      <img src="/images/arrow_right.svg" alt="arrowRight" />
    </Button>
  </div>
  <img class="w-[913px]" src="/images/404/404.png" alt="404img" />
</div>
 