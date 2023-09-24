<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let title: string;
  export let content: string;
</script>

<div
  class="flex flex-col lg:flex-row items-center gap-[20px] lg:gap-[50px] my-5"
>
  <Title class="text-[22px] lg:min-w-[100px]">{title}</Title>
  <Text class="text-center lg:text-left lg:min-w-[185px]">{content}</Text>
</div>
