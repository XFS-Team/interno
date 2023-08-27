<script>
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let image;
  export let icon;
  export let number;
  export let title;
  export let content;
</script>

<div
  {...$$props}
  class="flex flex-row items-center justify-between gap-[51px] {$$props.class}"
>
  <img src={image} alt="workImage" />
  <div>
    <div class="flex justify-between items-center">
      <img src={icon} alt="workIcon" />
      <Title class="text-[120px] text-white">{number}</Title>
    </div>
    <div class="mt-[55px]">
      <Title class="text-[35px]">{title}</Title>
      <Text>{content}</Text>
    </div>
  </div>
</div>
