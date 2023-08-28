<script>
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let title;
  export let price;
  export let priceColor;
  export let borderColor;
  export let plan;
  export let planDisplay;
  export let offerItems = [];
  export let button;
  export let buttonColor;
  export let arrowColor;
</script>

<div class="py-16 rounded-[33px] bg-pale-cream relative">
  <div class="flex flex-col items-center pb-11 {borderColor}">
    <Title class="text-[25px] tracking-[0.25px]">{title}</Title>
    <div class="flex items-center">
      <Title class="text-[25px] tracking-[0.25px] mt-10">$</Title>
      <Title class="text-[85px] tracking-[0.85px] {priceColor}">{price}</Title>
    </div>
    <Title class="text-[25px] tracking-[0.25px]">/month</Title>
  </div>

  <div
    class="bg-dark-gray py-[10px] px-[38px] rounded-[18px] max-w-[238px] absolute top-[256px] left-0 right-0 mx-auto {planDisplay}"
  >
    <Text intent="secondary" color="secondary">{plan}</Text>
  </div>

  <div class="my-7 mx-[45px] text-center mt-[30px] w-[279px]">
    {#each offerItems as offerItem}
      <Text class="text-xl leading-[250%] tracking-[0.2px]"
        >{offerItem}</Text
      >
    {/each}
  </div>

  <Button
    class="py-[26px] px-12 flex items-center gap-[13px] mx-auto {buttonColor}"
  >
    <Text intent="secondary" color="secondary">{button}</Text>
    <img src="/images/arrow_right{arrowColor}.svg" alt="arrowRight" />
  </Button>
</div>
