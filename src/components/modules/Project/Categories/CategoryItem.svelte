<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";

  export let name: string;
  export let bgColor: string;
  export let textColor: string;
</script>

<div class="py-[26px] px-[66px] {bgColor} rounded-[18px]">
  <Text intent="secondary" class={textColor}>{name}</Text>
</div>
