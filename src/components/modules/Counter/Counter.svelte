<script lang="ts">
  import CounterItem from "./CounterItem.svelte";

  const counters = [
    {
      number: 12,
      content: "Years Of Experiance",
      display: "",
      margin: "",
    },
    {
      number: 85,
      content: "Success Project",
      display: "",
      margin: "",
    },
    {
      number: 15,
      content: "Active Project",
      display: "",
      margin: "",
    },
    {
      number: 95,
      content: "Happy Customers",
      display: "lg:hidden",
      margin: "lg:mr-0",
    },
  ];
</script>

<div class="py-[50px] lg:py-[151px] my-[100px] lg:my-[200px] bg-pale-cream">
  <div
    class="h-full flex flex-col gap-y-[30px] lg:flex-row justify-center items-center"
  >
    {#each counters as counter}
      <CounterItem {...counter} />
    {/each}
  </div>
</div>
