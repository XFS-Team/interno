<script lang="ts">
  import Title from "../../../common/Title/Title.svelte";
  import TestimonialContent from "./TestimonialItem.svelte";

  const personInfors = [
    {
      avatar: "/images/Homepage/Testimonial/person_1.png",
      name: "Nattasha Mith",
      address: "Sydney, USA",
      bio: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
    },
    {
      avatar: "/images/Homepage/Testimonial/person_2.png",
      name: "Raymond Galario",
      address: "Sydney, Australia",
      bio: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
    },
    {
      avatar: "/images/Homepage/Testimonial/person_3.png",
      name: "Benny Roll",
      address: "Sydney, New York",
      bio: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
    },
  ];
</script>

<div class="container relative">
  <img src="/images/Homepage/Testimonial/bg_testimonial.svg" alt="testimonial" />

  <div class="absolute top-[88px] right-0 left-0 flex flex-col items-center">
    <Title class="max-w-[547px] text-center text-[50px] tracking-[1px]">
      What the People Thinks About Us
    </Title>
    <div class="mt-[38px] flex justify-between items-center gap-5">
      {#each personInfors as personInfor}
        <TestimonialContent {...personInfor} />
      {/each}
    </div>
  </div>
</div>
