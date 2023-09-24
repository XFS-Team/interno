<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";
  import SkillItem from "./SkillItem.svelte";

  const skills = [
    { nameSkill: "Project Design", percent: "65%" },
    { nameSkill: "Team Management", percent: "95%" },
    { nameSkill: "Client Satisfaction", percent: "75%" },
  ];
</script>

<div class="mt-[100px]">
  <div class="mb-[45px]">
    <Title
      class="text-center lg:text-left text-[35px] lg:text-[50px] leading-[150%] tracking-[0.5px] mb-[18px]"
      >Short Biography​</Title
    >
    <Text class="text-center lg:text-leftmb-8"
      >Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
      turpmaximus.posuere in.Contrary to popular belief.There are many
      variations of passages of Lorem Ipsum available, but the majority have
      suffered alteration in some form, njecthumour randomised words which don't
      look even slightly believable.</Text
    >
    <Text class="text-center lg:text-left"
      >Embarrassing hidden in the middle of text. All the Lorem Ipsum generators
      on the Internet tend to repeat predefined but the majority have suffered
      alteration in some form chunks as necessary.</Text
    >
  </div>
  <div
    class="flex flex-col gap-y-[40px] lg:flex-row items-center lg:items-start justify-between"
  >
    <div class="w-full lg:w-[577px]">
      <div class="mb-[30px]">
        <Title
          class="text-center lg:text-left text-[25px] leading-[150%] tracking-[0.25px] mb-3"
          >Simplicity and Functionality</Title
        >
        <Text class="text-center lg:text-left mb-8"
          >Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in belief.</Text
        >
        <Text class="text-center lg:text-left ">
          There are many variations of passages of Lorem Ipsum from available,
          but the majority have suffered alteration in some form, njecthumour</Text
        >
      </div>
      <div class="w-full flex flex-col items-start gap-y-5">
        {#each skills as skill}
          <SkillItem {...skill} />
        {/each}
      </div>
    </div>

    <div class="lg:w-[529px]">
      <div class="mb-[19px]">
        <Title
          class="text-center lg:text-left text-[25px] leading-[150%] tracking-[0.25px] mb-3"
          >Question And Answer</Title
        >
        <Text class="text-center lg:text-left "
          >Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in.</Text
        >
      </div>

      <div class="flex flex-col items-center gap-y-[30px]">
        <div class="py-6 px-[22px] rounded-[18px] bg-pale-cream">
          <div class="flex items-center justify-between mb-[15px]">
            <Text intent="secondary">Website & Mobile App Design?</Text>
            <img src="/images/TeamSingle/Icons/minus.svg" alt="minusIcon" />
          </div>
          <Text class="text-slate"
            >Lorem ipsum dolor sit amet, adipiscing fromAliquam eu sem
            turpmaximus.</Text
          >
        </div>

        <div
          class="w-full py-[14px] px-[22px] rounded-[18px] border-[1px] border-solid border-primary bg-white flex items-center justify-between"
        >
          <Text intent="secondary">How to Easy Successful Projects?</Text>
          <img src="/images/TeamSingle/Icons/plus.svg" alt="" />
        </div>

        <div
          class="w-full py-[14px] px-[22px] rounded-[18px] border-[1px] border-solid border-primary bg-white flex items-center justify-between"
        >
          <Text intent="secondary">International Trade Experience?</Text>
          <img src="/images/TeamSingle/Icons/plus.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</div>
