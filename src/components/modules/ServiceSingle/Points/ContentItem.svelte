<script>
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let number;
  export let content;
</script>

<div class="flex items-center gap-[18px] mt-5">
  <Title class="text-xl" color="secondary">{number}</Title>
  <Text>{content}</Text>
</div>
