<script>
  import Text from "../../../common/Text/Text.svelte";

  export let name;
  export let bgColor;
  export let textColor;
</script>

<div class="py-[26px] px-[66px] {bgColor} rounded-[18px]">
  <Text intent="secondary" class={textColor}>{name}</Text>
</div>
