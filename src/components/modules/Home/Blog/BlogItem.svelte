<script>
  import Title from "../../../common/Title/Title.svelte";
  import Text from "../../../common/Text/Text.svelte";

  export let image;
  export let tag;
  export let content;
  export let date;
  export let colorArrow;
</script>

<div
  {...$$props}
  class="relative p-[21px] rounded-[62px] border-[1px] border-solid border-[#E7E7E7] flex flex-col {$$props.class}"
>
  <img src={image} alt="blogImage" />
  <div
    class="rounded-t-[8px] absolute top-[249px] left-[41px] bg-white px-[11px] py-[6px]"
  >
    <Text class="text-base tracking-[0.16px]">{tag}</Text>
  </div>
  <Title class="mt-[15px] mb-[25px] text-[25px] tracking-[0.5px]">
    {content}
  </Title>
  <div class="pb-[16px] flex justify-between items-center">
    <Text class="text-base tracking-[0.16px]">{date}</Text>
    <img
      class="w-[52px] h-[52px]"
      src="/images/arrow_button_{colorArrow}.svg"
      alt="arrowButton"
    />
  </div>
</div>
