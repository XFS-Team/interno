<script lang="ts">
  import Text from "../../common/Text/Text.svelte";
  import Title from "../../common/Title/Title.svelte";

  export let number: number;
  export let content: string;
  export let display: string;
  export let margin: string;
</script>

<div class="flex items-center justify-center">
  <div
    {...$$props}
    class="{margin} lg:mr-[54px] flex flex-col items-center justify-center {$$props.class}"
  >
    <Title color="secondary" class="text-[85px] tracking-[1.7px]">
      {number}
    </Title>
    <Text class="text-center">{content}</Text>
  </div>
  <div class="hidden lg:block lg:w-px lg:h-[130px] bg-primary mr-[76px] {display}" />
</div>
