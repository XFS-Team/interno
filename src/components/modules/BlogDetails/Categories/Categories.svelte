<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  const title = "Categories";
</script>

<div
  class="w-full py-[27px] px-8 rounded-[20px] bg-pale-cream flex flex-col items-start"
>
  <Title class="text-[25px] tracking-[0.5px] mb-[10px]">{title}</Title>
  <Text class="leading-[300%]">Decoration</Text>
  <div class="w-full h-px bg-primary" />
  <Text class="leading-[300%]">Door Windows</Text>
  <div class="w-full h-px bg-primary" />
  <Text class="leading-[300%]">Home Land</Text>
  <div class="w-full h-px bg-primary" />
  <Text class="leading-[300%]">Roof Installation</Text>
</div>
