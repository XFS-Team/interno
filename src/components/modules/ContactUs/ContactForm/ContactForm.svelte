<script lang="ts">
  import Button from "../../../common/Button/Button.svelte";
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
  import Input from "../../BlogDetails/Form/Input.svelte";

  const contactInfors = {
    mailImg: "/images/ContactUs/Icons/mail.svg",
    mail: "info@yourdomain.com",
    phoneImg: "/images/ContactUs/Icons/phone.svg",
    phone: "+1 (378) 400-1234",
    websiteImg: "/images/ContactUs/Icons/earth.svg",
    website: "www.yourdomain.com",
    socials: ["facebook", "twitter", "linkedin", "instagram"],
  };

  const inputs = ["Name", "Email", "Website", "Phone"];
  const textareaName = "Hello Iam Intrested in..";
</script>

<div
  class="container flex flex-col items-center justify-center mt-[50px] lg:mt-[200px]"
>
  <Title
    class="lg:w-[683px] text-[35px] lg:text-[50px] leading-[150%] tracking-[0.5px] text-center"
    >We love meeting new people and helping them.</Title
  >
  <div
    class="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between gap-[55px] mt-20"
  >
    <div class="lg:w-[349px] py-[76px] px-8 bg-pale-cream rounded-[50px]">
      <div class="lg:w-[285px] flex flex-col items-start gap-y-[30px]">
        <div class="flex items-center">
          <img src={contactInfors.mailImg} alt="mailImg" />
          <Text class="text-xl leading-[150%] tracking-[0.2px] ml-[15px]"
            >{contactInfors.mail}</Text
          >
        </div>
        <div class="flex items-center">
          <img src={contactInfors.phoneImg} alt="phoneImg" />
          <Text class="text-xl leading-[150%] tracking-[0.2px] ml-[15px]"
            >{contactInfors.phone}</Text
          >
        </div>
        <div class="flex items-center">
          <img src={contactInfors.websiteImg} alt="websiteImg" />
          <Text class="text-xl leading-[150%] tracking-[0.2px] ml-[15px]"
            >{contactInfors.website}</Text
          >
        </div>
      </div>

      <div
        class="flex flex-wrap items-center justify-center gap-[35px] mt-[47px]"
      >
        {#each contactInfors.socials as social}
          <img
            class="h-[21px]"
            src="/images/Socials/{social}.svg"
            alt="socialImg"
          />
        {/each}
      </div>
    </div>

    <div class="flex flex-col items-center lg:items-end">
      <div class="flex flex-wrap items-center justify-between gap-y-[50px]">
        {#each inputs as input}
          <Input name={input} />
        {/each}
        <textarea
          class="w-full outline-none text-[22px] text-slate leading-[150%] tracking-[0.22px] border-b-[1px] border-solid border-[#000] h-[175px]"
          placeholder={textareaName}
        />
      </div>

      <Button class="mt-[58px] py-[26px] px-[54px] flex items-center gap-2.5">
        <Text intent="secondary" color="secondary">Send Now</Text>
        <img src="/images/arrow_right.svg" alt="arrowRight" />
      </Button>
    </div>
  </div>
</div>
