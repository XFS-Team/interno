<script lang="ts">
  import Title from "../../../common/Title/Title.svelte";
  import ContentItem from "./ContentItem.svelte";

  interface ContentItemType {
    number: number;
    content: string;
  }

  export let title: string;
  export let contentItems: ContentItemType[];
</script>

<div class="lg:max-w-[435px]">
  <Title class="text-center lg:text-left text-[25px] lg:text-[50px] mb-[23px]"
    >{title}</Title
  >
  {#each contentItems as contentItem}
    <ContentItem {...contentItem} />
  {/each}
</div>
