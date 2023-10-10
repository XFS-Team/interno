<script lang="ts">
  import Title from "../../common/Title/Title.svelte";
  import Text from "../../common/Text/Text.svelte";

  export let image: string;
  export let tag: string;
  export let content: string;
  export let date: string;
</script>

<div
  {...$$props}
  class="lg:w-[376px] p-[21px] rounded-[62px] border border-solid border-[#E7E7E7] flex flex-col hover:bg-pale-cream transition-all {$$props.class}"
>
  <div class="relative">
    <img class="w-full" src={image} alt="blogImage" />
    <div
      class="rounded-t-lg absolute bottom-[21px] left-[20px] bg-white px-[11px] py-[6px]"
    >
      <Text class="text-base tracking-[0.16px]">{tag}</Text>
    </div>
  </div>

  <Title class="mt-[15px] mb-[25px] text-[25px] tracking-[0.5px]">
    {content}
  </Title>

  <div class="pb-4 flex justify-between items-center">
    <Text class="text-base tracking-[0.16px]">{date}</Text>
    <img
      class="w-[52px] h-[52px]"
      src="/images/arrow_button_default.svg"
      alt="arrowButton"
    />
  </div>
</div>
