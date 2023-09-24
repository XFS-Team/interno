<script lang="ts">
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let title: string;
  export let price: string;
  export let priceColor: string;
  export let borderColor: string;
  export let plan: string;
  export let planDisplay: string;
  export let offerItems: string[];
  export let button: string;
  export let buttonColor: string;
  export let arrowColor: string;
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
    class="bg-dark-gray py-2.5 px-[38px] rounded-[18px] max-w-[238px] absolute top-[256px] left-0 right-0 mx-auto {planDisplay}"
  >
    <Text intent="secondary" color="secondary">{plan}</Text>
  </div>

  <div
    class="my-7 mx-[45px] flex flex-col gap-y-[20px] lg:gap-y-0 text-center mt-[30px] lg:w-[279px]"
  >
    {#each offerItems as offerItem}
      <Text class="text-xl leading-[125%] lg:leading-[250%] tracking-[0.2px]"
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
