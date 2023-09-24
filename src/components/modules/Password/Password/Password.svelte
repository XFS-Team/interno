<script lang="ts">
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
  import Input from "../../BlogDetails/Form/Input.svelte";

  const inputName = "Enter Your Password";
</script>

<div class="container">
  <div
    class=" my-[50px] lg:my-[200px] flex flex-col justify-center items-center py-[30px] px-[50px] lg:py-[154px] lg:px-60 bg-pale-cream rounded-[70px]"
  >
    <Title
      class="text-center text-[35px] lg:text-[50px] leading-[150%] tracking-[0.5px]"
      >Password Protected</Title
    >
    <Text class="lg:w-[718px] leading-[150%] tracking-[0.22px] text-center"
      >This page is password protected. If you are the website admin, or have
      access to this page, please type your password below.</Text
    >
    <div class="flex flex-col items-center mt-[50px]">
      <Input class="text-xl bg-pale-cream placeholder-dark-gray" name={inputName} />
      <Button class="mt-[41px] py-[26px] px-[54px] flex items-center gap-[9px]">
        <Text intent="secondary" color="secondary">Submit Now</Text>
        <img src="/images/arrow_right.svg" alt="arrowRight" />
      </Button>
    </div>
  </div>
</div>
