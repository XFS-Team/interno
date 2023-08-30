<script lang="ts">
  import PointItem from "./PointItem.svelte";

  const title1 = "Use of Interior";
  const title2 = "Make An Art";

  interface ContentItemType {
    number: number; // Allow number type for the 'number' property
    content: string;
  }

  const contentItems: ContentItemType[] = [
    { number: 1, content: "We pdrovide high quality design services." },
    { number: 2, content: "Project on time and Latest Design." },
    { number: 3, content: "Scientific Skills For getting a better result." },
    { number: 4, content: "Renovations Benefit of Service" },
    { number: 5, content: "We are confident about our projects." },
  ];
</script> 

<div class="container flex justify-between items-center my-[150px] px-[82px] gap-[83px]">
  <PointItem title={title1} {contentItems} />
  <div class="w-px h-[249px] bg-[#CECECE]" />
  <PointItem title={title2} {contentItems} />
</div>
