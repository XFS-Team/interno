<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let number: number;
  export let content: string;
</script>

<div class="flex items-center gap-[18px] mt-5">
  <Title class="text-xl" color="secondary">{number}</Title>
  <Text class="text-justify lg:text-left">{content}</Text>
</div>
