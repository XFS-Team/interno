<script>
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
  export let title;
</script>

<div class="max-w-[358px] flex flex-col items-center justify-between">
  <Title class="text-[25px]">
    {title}
  </Title>
  <div class=" text-[22px] font-[400] leading-[150%] tracking-[0.22px]" />
  <Text class="mt-[20px] text-center">
    There are many variations of the passages of lorem Ipsum from available,
    majority.
  </Text>
  <div class="cursor-pointer flex items-center gap-[12px] mt-[52px]">
    <Text intent="secondary">Read More</Text>
    <img src="/images/arrow_right.svg" alt="arrowRight" />
  </div>
</div>
