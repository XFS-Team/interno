<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let image: string;
  export let name: string;
  export let description: string;
</script>

<div class="flex flex-col w-[48%]">
  <img src={image} alt="projectImage" />
  <div class="mt-[28px] flex items-center justify-between">
    <div>
      <Title class="text-[25px] tracking-[0.5px]">{name}</Title>
      <Text class="mt-1">{description}</Text>
    </div>
    <img src="/images/arrow_button_default.svg" alt="projectArrow" />
  </div>
</div>
