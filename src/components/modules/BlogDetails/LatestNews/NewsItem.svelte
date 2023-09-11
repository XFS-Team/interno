<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let title: string;
  export let date: string;
</script>

<div class="flex justify-between border-b-[1px] border-primary w-[345px]">
  <Title class="w-[200px] text-xl tracking-[0.4px] mb-[5px]">{title}</Title>
  <Text
    class="text-base leading-[150%] tracking-[0.16px] capitalize mb-[6px] mt-[55px]"
    >{date}</Text
  >
</div>
