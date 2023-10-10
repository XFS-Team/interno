<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  const memberDetail = {
    image: "/images/TeamSingle/Members/member_main.png",
    name: "John Smith",
    position: "Designer",
    description:
      "Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrpobelie frandomised words which don't look even slightly believable.",
    mailImg: "/images/TeamSingle/Icons/mail.svg",
    mail: "info@yourdomain.com",
    phoneImg: "/images/TeamSingle/Icons/phone.svg",
    phone: "+1 (378) 400-1234",
    websiteImg: "/images/TeamSingle/Icons/earth.svg",
    website: "www.yourdomain.com",
    socials: ["facebook", "twitter", "linkedin", "instagram"],
  };
</script>

<div
  data-aos="fade-down"
  data-aos-duration="500"
  class="flex flex-col lg:flex-row items-center gap-[59px]"
>
  <img src={memberDetail.image} alt="memberImage" />
  <div class="flex flex-col items-center lg:items-start">
    <Title
      class="text-center lg:text-left text-[25px] lg:text-[50px] leading-[150%] tracking-[0.5px]"
      >{memberDetail.name}</Title
    >
    <Text class="text-center lg:text-left mb-[30px]"
      >{memberDetail.position}</Text
    >
    <Text class="text-center lg:text-left ">{memberDetail.description}</Text>

    <div class="flex flex-col items-start gap-y-[30px] mt-8">
      <div class="flex items-center">
        <img src={memberDetail.mailImg} alt="mailImg" />
        <Text class="text-xl leading-[150%] tracking-[0.2px] ml-[15px]"
          >{memberDetail.mail}</Text
        >
      </div>
      <div class="flex items-center">
        <img src={memberDetail.phoneImg} alt="phoneImg" />
        <Text class="text-xl leading-[150%] tracking-[0.2px] ml-[15px]"
          >{memberDetail.phone}</Text
        >
      </div>
      <div class="flex items-center">
        <img src={memberDetail.websiteImg} alt="websiteImg" />
        <Text class="text-xl leading-[150%] tracking-[0.2px] ml-[15px]"
          >{memberDetail.website}</Text
        >
      </div>
    </div>

    <div class="flex flex-wrap items-center gap-[35px] mt-[47px]">
      {#each memberDetail.socials as social}
        <img
          class="h-[21px]"
          src="/images/Socials/{social}.svg"
          alt="socialImg"
        />
      {/each}
    </div>
  </div>
</div>
