<script lang="ts">
  import Text from "../../common/Text/Text.svelte";
  import Title from "../../common/Title/Title.svelte";

  export let number: number;
  export let content: string;
</script>

<div
  {...$$props}
  class="mr-[54px] flex flex-col items-center justify-center {$$props.class}"
>
  <Title color="secondary" class="text-[85px] tracking-[1.7px]">
    {number}
  </Title>
  <Text>{content}</Text>
</div>
