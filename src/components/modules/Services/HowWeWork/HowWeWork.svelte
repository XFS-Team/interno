<script>
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
  import WorkItem from "./WorkItem.svelte";

  const works = [
    {
      image: "/images/Services/Work/work_1.png",
      icon: "/images/Services/WorkIcon/icon_1.svg",
      number: "01",
      title: "Concept & Details",
      content:
        "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
    {
      image: "/images/Services/Work/work_2.png",
      icon: "/images/Services/WorkIcon/icon_2.svg",
      number: "02",
      title: "Idea for Work",
      content:
        "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
      class: "flex-row-reverse",
    },
    {
      image: "/images/Services/Work/work_3.png",
      icon: "/images/Services/WorkIcon/icon_3.svg",
      number: "03",
      title: "Design",
      content:
        "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
    },
    {
      image: "/images/Services/Work/work_4.png",
      icon: "/images/Services/WorkIcon/icon_4.svg",
      number: "04",
      title: "Perfection",
      content:
        "It is a long established fact will be distracted. Lorem Ipsum is simply dummy from text of the and typesetting indufstry.",
      class: "flex-row-reverse",
    },
  ];
</script>

<div class="container rounded-[70px] bg-pale-cream py-40 px-[116px]">
  <div class="flex flex-col justify-between items-center mb-[100px]">
    <Title class="text-[50px] text-center">How We Work</Title>
    <Text class="max-w-[802px] mt-2 text-center"
      >It is a long established fact will be distracted.Lorem Ipsum is simply
      dummy text of the printing and typesetting industry.</Text
    >
  </div>

  <div class="flex flex-col gap-[70px]">
    {#each works as work}
      <WorkItem {...work} />
    {/each}
  </div>
</div>
