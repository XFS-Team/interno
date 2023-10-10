<script lang="ts">
  import Text from "../../common/Text/Text.svelte";
  import Title from "../../common/Title/Title.svelte";

  export let title: string;
</script>

<div
  {...$$props}
  class="hover:bg-pale-cream py-[83px] px-[20px] rounded-[30px] {$$props.class}"
>
  <div class="max-w-[333px] flex flex-col items-center justify-between">
    <Title class="text-center text-[25px] lg:text-[25px]">
      {title}
    </Title>
    <div class=" text-[22px] font-[400] leading-[150%] tracking-[0.22px]" />
    <Text class="mt-5 text-center">
      There are many variations of the passages of lorem Ipsum from available,
      majority.
    </Text>
    <div class="cursor-pointer flex items-center gap-3 mt-[52px]">
      <Text intent="secondary">Read More</Text>
      <img src="/images/arrow_right.svg" alt="arrowRight" />
    </div>
  </div>
</div>
