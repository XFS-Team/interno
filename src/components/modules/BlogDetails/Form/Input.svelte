<script lang="ts">
  export let name: string;
</script>

<input
  {...$$props}
  class="outline-none text-[22px] text-slate leading-[150%] tracking-[0.22px] border-b-[1px] border-solid border-[#000] w-[378px] h-11 {$$props.class}"
  placeholder={name}
  type="text"
/>
