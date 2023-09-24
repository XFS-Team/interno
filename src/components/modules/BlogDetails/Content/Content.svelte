<script lang="ts">
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
  import Points from "../Points/Points.svelte";
  import Quotes from "../Quotes/Quotes.svelte";
  import TagItem from "../Tag/TagItem.svelte";

  const tags = [
    {
      nameTag: "Kitchen",
      textColor: "text-white",
      class: "py-[13px] px-[25px] bg-dark-gray",
    },
    {
      nameTag: "Bedroom",
      textColor: "text-dark-gray",
      class: "py-[13px] px-[25px] bg-pale-cream",
    },
  ];

  const iconData = [
    {
      link: "/",
      image: "/images/Socials/facebook.svg",
    },
    {
      link: "/",
      image: "/images/Socials/twitter.svg",
    },
    {
      link: "/",
      image: "/images/Socials/linkedin.svg",
    },
    {
      link: "/",
      image: "/images/Socials/instagram.svg",
    },
  ];
</script>

<Title
  class="text-[35px] lg:text-[50px] text-center lg:text-left tracking-[1px] mb-[21px]"
  >Let’s Get Solution for Building Construction Work</Title
>
<img src="/images/BlogDetails/Content/content_1.png" alt="content" />
<div class="flex flex-col lg:flex-row items-center justify-between mt-[46px]">
  <Text class="text-center lg:text-left">26 December,2022</Text>
  <Text class="text-center lg:text-left">Interior / Design / Home / Decore</Text
  >
</div>
<Text class="text-center lg:text-left mt-12">
  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
  turpmaximus.posuere in.Contrary to popular belief.There are many variations of
  passages of Lorem Ipsum available, but the majority have suffered alteration
  in some form, by injecthumour, or randomised words which don't look even
  slightly believable.
</Text>
<Text class="text-center lg:text-left mt-8"
  >Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on
  the Internet tend to repeat predefined chunks as necessary.</Text
>

<Quotes class="mt-[35px] mb-[27px]" />

<Title
  class="text-[35px] lg:text-[50px] text-center lg:text-left tracking-[1px] mb-5"
  >Design sprints are great</Title
>
<Text class="mb-6 text-center lg:text-left">
  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
  turpmaximus.posuere in.Contrary to popular belief.There are many variations of
  passages of Lorem Ipsum available, but the majority have suffered.
</Text>

<Points />

<img
  class="mt-11 mb-[35px]"
  src="/images/BlogDetails/Content/content_2.png"
  alt="content"
/>

<Text class="text-center lg:text-left">
  Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
  turpmaximus.posuere in.Contrary to popular belief.There are many variations of
  passages of Lorem Ipsum available, but the majority have suffered.
</Text>

<!-- <div class="w-[800px] h-px bg- " /> -->

<div
  class="flex flex-wrap items-center gap-y-[30px] justify-center md:justify-between border-b-[1px] border-t-[1px] py-11 border-[#E5E5E5] mt-[62px]"
>
  <div
    class="flex flex-wrap items-center justify-center gap-[20px] mr-[20px] lg:mr-0"
  >
    <Title class="text-xl">Tags</Title>
    <div class="flex flex-wrap items-center justify-center gap-5">
      {#each tags as tag}
        <TagItem {...tag} />
      {/each}
    </div>
  </div>
  <div>
    <ul class="flex flex-wrap items-center justify-center gap-[54px]">
      {#each iconData as icon}
        <li>
          <a href={icon.link}>
            <img class="w-[23px] h-[23px]" src={icon.image} alt="icon" />
          </a>
        </li>
      {/each}
    </ul>
  </div>
</div>
