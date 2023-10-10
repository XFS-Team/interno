<script>
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
  import Input from "./Input.svelte";

  const inputs = ["Name", "Email", "Website", "Phone"];
  const textareaName = "Hello Iam Intrested in..";
</script>

<div data-aos="fade-right"
  data-aos-duration="500" class="mt-[93px]">
  <Title class="text-[25px] tracking-[0.5px]">Leave a Reply</Title>
  <div
    class="flex flex-wrap items-center justify-between gap-y-[50px] my-[36px]"
  >
    {#each inputs as input}
      <Input name={input} />
    {/each}
    <textarea
      class="outline-none text-[22px] text-slate leading-[150%] tracking-[0.22px] border-b-[1px] border-solid border-[#000] w-[800px] h-[175px]"
      placeholder={textareaName}
    />
  </div>

  <div class="flex items-center gap-2.5 relative">
    <input
      type="checkbox"
      class="relative appearance-none w-8 lg:w-4 h-4 border-[2px] border-primary rounded-sm before:ring-primary focus:outline-none checked:bg-primary hover:ring-1 hover:ring-primary"
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
