<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let title: string;
  export let content: string;
</script>

<div class="flex items-center gap-[50px] my-5">
  <Title class="text-[22px] min-w-[100px]">{title}</Title>
  <Text class="min-w-[185px]">{content}</Text>
</div>
