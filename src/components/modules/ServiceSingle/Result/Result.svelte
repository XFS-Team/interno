<script lang="ts">
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
</script>

<div class="container flex justify-between items-center gap-[82px]">
  <img src="/images/ServiceSingle/Result/result.png" alt="result" />
  <div>
    <Title class="text-[50px] tracking-[1px]"
      >We love design.That's how we got here.</Title
    >
    <Text class="mt-[11px]"
      >It is a long established fact that a reader will be distracted by the of
      readable content .</Text
    >
    <Button class="mt-8 py-[26px] px-10 flex items-center gap-[13px]">
      <Text intent="secondary" color="secondary">Our Portfolio</Text>
      <img src="/images/arrow_right.svg" alt="arrowRight" />
    </Button>
  </div>
</div>
