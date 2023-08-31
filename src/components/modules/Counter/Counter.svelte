<script lang="ts">
  import CounterItem from "./CounterItem.svelte";

  const counters = [
    {
      number: 12,
      content: "Years Of Experiance",
      display: "",
    },
    {
      number: 85,
      content: "Success Project",
      display: "",
    },
    {
      number: 15,
      content: "Active Project",
      display: "",
    },
    {
      number: 95,
      content: "Happy Customers",
      display: "hidden",
    },
  ];
</script>

<div class="h-[457px] my-[200px] bg-pale-cream">
  <div class="max-w-[1200px] h-full mx-auto">
    <div class="h-full flex justify-center items-center">
      {#each counters as counter}
        <CounterItem {...counter} />
      {/each}
    </div>
  </div>
</div>
