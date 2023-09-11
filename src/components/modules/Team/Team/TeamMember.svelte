<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let image: string;
  export let name: string;
  export let position: string;
  export let socials: string[];
</script>

<div class="w-[283px] flex flex-col items-center ">
  <img src={image} alt="memberImage" />
  <Title class="text-[25px] leading-[150%] tracking-[0.25px] mt-[17px]">{name}</Title>
  <Text class="text-lg leading-[150%] tracking-[0.18px] mb-4">{position}</Text>
  <div class="flex items-center justify-center gap-[37px]">
    {#each socials as social}
      <img class="h-[21px]" src="/images/Socials/{social}.svg" alt="socialImage" />
    {/each}
  </div>
</div>
