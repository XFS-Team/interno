<script lang="ts">
  import Title from "../../../common/Title/Title.svelte";
</script>

<div
  {...$$props}
  class="pt-[30px] pb-[53px] px-[227px] rounded-[50px] bg-pale-cream flex flex-col items-center {$$props.class}"
>
  <Title
    color="secondary"
    class="w-[150px] h-[132px] text-[200px] italic tracking-[4px] rotate-180">“</Title
  >
  <Title
    color="secondary" 
    class="w-[360px] text-[25px] italic tracking-[0.5px] text-center"
    >The details are not the details. They make the design.</Title
  >
</div>
