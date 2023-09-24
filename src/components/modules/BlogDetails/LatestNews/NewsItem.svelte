<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let title: string;
  export let date: string;
</script>

<div
  class="flex flex-col items-baseline justify-between border-b-[1px] border-primary"
>
  <div class="w-full flex justify-start">
    <Title class="lg:w-[200px] text-xl tracking-[0.4px] mb-[5px]">{title}</Title
    >
  </div>
  <div class="w-full flex justify-end">
    <Text class="text-base leading-[150%] tracking-[0.16px] capitalize mb-[6px]"
      >{date}</Text
    >
  </div>
</div>
