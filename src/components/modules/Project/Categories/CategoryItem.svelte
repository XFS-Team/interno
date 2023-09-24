<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";

  export let name: string;
  export let bgColor: string;
  export let textColor: string;
</script>

<div
  class="w-full lg:w-[220px] py-[26px] px-[66px] flex justify-center {bgColor} rounded-[18px]"
>
  <Text intent="secondary" class="text-center {textColor}">{name}</Text>
</div>
