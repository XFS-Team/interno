<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let image: string;
  export let icon: string;
  export let number: string;
  export let title: string;
  export let content: string;
</script>

<div
  {...$$props}
  class="flex flex-col-reverse lg:flex-row items-center justify-between gap-[51px] {$$props.class}"
>
  <img src={image} alt="workImage" />
  <div>
    <div class="flex justify-between items-center">
      <img class="" src={icon} alt="workIcon" />
      <Title class="text-[100px] lg:text-[120px] text-white">{number}</Title>
    </div>
    <div class="mt-[20px] lg:mt-[55px]">
      <Title class="text-center lg:text-left text-[25px]">{title}</Title>
      <Text class="text-center lg:text-left">{content}</Text>
    </div>
  </div>
</div>
