<script lang="ts">
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
  import Input from "../../BlogDetails/Form/Input.svelte";

  const inputs = ["Name", "Email"];
  const textareaName = "Sent Your Message";
</script>

<div class="container p-[200px] flex flex-col items-center">
  <Title class="text-[50px] leading-[150%] tracking-[0.5px]">Contact Me</Title>
  <div
    class="flex flex-wrap items-center justify-between gap-y-[50px] my-7"
  >
    {#each inputs as input}
      <Input name={input} />
    {/each}
    <textarea
      class="w-full outline-none text-[22px] text-slate leading-[150%] tracking-[0.22px] border-b-[1px] border-solid border-[#000] h-[175px]"
      placeholder={textareaName}
    />
  </div>
  <div class="flex items-center gap-2.5 relative">
    <input
      type="checkbox"
      class="relative appearance-none w-4 h-4 border-[2px] border-primary rounded-sm before:ring-primary focus:outline-none checked:bg-primary hover:ring-1 hover:ring-primary"
    />
    <Text color="tertiary"
      >Save my name, email, and website in this browser for the next time I
      comment.</Text
    >
  </div>

  <Button class="mt-[63px] py-[26px] px-[54px] flex items-center gap-2.5">
    <Text intent="secondary" color="secondary">Send Now</Text>
    <img src="/images/arrow_right.svg" alt="arrowRight" />
  </Button>
</div>
