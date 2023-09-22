<script lang="ts">
  import Button from "../../common/Button/Button.svelte";
  import Text from "../../common/Text/Text.svelte";
  import Title from "../../common/Title/Title.svelte";
</script>

<div class="container my-[100px] lg:my-[200px]">
  <div
    class="px-[50px] lg:px-[315px] py-20 bg-dark-gray rounded-[70px] flex flex-col justify-center items-center"
  >
    <Title class="text-center text-[35px] lg:text-[50px] text-white"
      >Wanna join the interno?</Title
    >
    <Text class="text-center mt-[11px] text-white">
      It is a long established fact will be distracted.
    </Text>
    <Button
      color="secondary"
      boxShadow="secondary"
      class="flex py-[26px] px-[37px] items-center mt-8 gap-[11px]"
    >
      <Text intent="secondary" class="text-white">Contact With Us</Text>
      <img src="/images/arrow_right_black.svg" alt="arrowRight" />
    </Button>
  </div>
</div>
