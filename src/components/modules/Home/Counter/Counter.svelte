<script>
  import CounterItem from "./CounterItem.svelte";

  let counter1 = {
    number: 12,
    content: "Years Of Experiance",
  };
  let counter2 = {
    number: 85,
    content: "Success Project",
  };
  let counter3 = {
    number: 15,
    content: "Active Project",
  };
  let counter4 = {
    number: 95,
    content: "Happy Customers",
  };
</script>

<div class="h-[457px] my-[200px] bg-[#F4F0EC]">
  <div class="max-w-[1200px] h-full mx-auto">
    <div class="h-full flex justify-center items-center">
      <CounterItem number={counter1.number} content={counter1.content} />
      <div class="w-px h-[130px] bg-[#CDA274]" />
      <CounterItem
        class="pl-[76px]"
        number={counter2.number}
        content={counter2.content}
      />
      <div class="w-px h-[130px] bg-[#CDA274]" />
      <CounterItem
        class="pl-[76px]"
        number={counter3.number}
        content={counter3.content}
      />
      <div class="w-px h-[130px] bg-[#CDA274]" />
      <CounterItem
        class="pl-[76px]"
        number={counter4.number}
        content={counter4.content}
      />
    </div>
  </div>
</div>
