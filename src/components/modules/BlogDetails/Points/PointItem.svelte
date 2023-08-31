<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let number: number;
  export let content: string;
</script>

<div class="flex items-start justify-between gap-3.5">
  <Title class="text-xl" color="secondary">{number}</Title>
  <Text>{content}</Text>
</div>
