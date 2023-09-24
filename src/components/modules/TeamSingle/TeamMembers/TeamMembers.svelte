<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  const memberDetail = {
    name: "Nattasha Julie",
    position: "Design, Australia",
    socials: ["facebook", "twitter", "linkedin", "instagram"],
    phone: "+1 (378) 400-1234",
    mail: " julie@email.com",
  };
</script>

<div class="bg-pale-cream py-[50px] lg:py-[198px]">
  <div class="container flex flex-col items-center">
    <Title
      class="text-center text-[35px] lg:text-[50px] leading-[150%] tracking-[0.5px] mb-4 lg:mb-16"
      >Our Team Members</Title
    >
    <div
      class="flex flex-wrap items-center justify-center xl:justify-between gap-[22px]"
    >
      <img src="/images/TeamSingle/Members/member_1.png" alt="memberImg" />
      <img src="/images/TeamSingle/Members/member_2.png" alt="memberImg" />
      <div
        class="flex flex-col gap-y-[66px] bg-white py-[81px] px-[53px] rounded-[36px] items-center justify-center"
      >
        <div class="flex flex-col items-center">
          <Title
            class="text-center text-[25px] leading-[150%] tracking-[0.25px]"
            >{memberDetail.name}</Title
          >
          <Text class="text-center text-lg leading-[150%] tracking-[0.18px]"
            >{memberDetail.position}</Text
          >
        </div>
        <div class="flex flex-wrap items-center justify-center gap-[36px]">
          {#each memberDetail.socials as social}
            <img
              class="h-[21px]"
              src="/images/Socials/{social}.svg"
              alt="socialImg"
            />
          {/each}
        </div>
        <div class="flex flex-col items-center">
          <Text class="text-center text-lg leading-[150%] tracking-[0.18px]"
            >{memberDetail.phone}</Text
          >
          <Text class="text-center text-lg leading-[150%] tracking-[0.18px]"
            >{memberDetail.mail}</Text
          >
        </div>
      </div>
      <img src="/images/TeamSingle/Members/member_3.png" alt="memberImg" />
    </div>
  </div>
</div>
