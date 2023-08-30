<script lang="ts">
  import Text from "../../common/Text/Text.svelte";

  export let image = "";
  export let number = "";
</script>

<div class="relative flex items-center justify-center">
  <img src={image} alt="pageNumber" />
  <Text intent="secondary" class="text-base absolute">{number}</Text>
</div>
