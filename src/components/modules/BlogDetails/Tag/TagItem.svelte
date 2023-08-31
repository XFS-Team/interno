<script lang="ts">
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";

  export let nameTag: string;
  export let textColor: string;
</script>

<Button {...$$props} class="shadow-none rounded-[10px] {$$props.class}">
  <Text intent="secondary" class={textColor}>{nameTag}</Text>
</Button>
