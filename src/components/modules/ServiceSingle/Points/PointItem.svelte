<script>
  import Title from "../../../common/Title/Title.svelte";
  import ContentItem from "./ContentItem.svelte";

  export let title;
  export let contentItems = [];
</script>

<div class="max-w-[435px]">
  <Title class="text-[50px] mb-[23px]">{title}</Title>
  {#each contentItems as contentItem}
    <ContentItem {...contentItem} />
  {/each}
</div>
