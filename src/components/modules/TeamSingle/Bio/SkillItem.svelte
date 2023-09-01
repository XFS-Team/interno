<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";

  export let nameSkill: string;
  export let percent: string;
</script>

<div class="flex flex-col">
  <div class="flex items-center justify-between mb-2">
    <Text class="font-medium">{nameSkill}</Text>
    <Text class="text-[15px] leading-[150%] tracking-[0.15px]">{percent}</Text>
  </div>
  <div class="w-[533px] bg-gray-200 rounded-full h-[5px] dark:bg-pale-cream">
    <div
      class="bg-primary h-[5px] rounded-full relative"
      style="width: {percent}"
    >
      <img
        class="absolute right-0 top-[-9px]"
        src="/images/TeamSingle/Icons/progress.svg"
        alt=""
      />
    </div>
  </div>
</div>
