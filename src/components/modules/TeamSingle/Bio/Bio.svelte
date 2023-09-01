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
    <Title class="text-[50px] leading-[150%] tracking-[0.5px] mb-[18px]"
      >Short Biography​</Title
    >
    <Text class="mb-8"
      >Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
      turpmaximus.posuere in.Contrary to popular belief.There are many
      variations of passages of Lorem Ipsum available, but the majority have
      suffered alteration in some form, njecthumour randomised words which don't
      look even slightly believable.</Text
    >
    <Text
      >Embarrassing hidden in the middle of text. All the Lorem Ipsum generators
      on the Internet tend to repeat predefined but the majority have suffered
      alteration in some form chunks as necessary.</Text
    >
  </div>
  <div class="flex items-start justify-between">
    <div class="w-[577px]">
      <div class="mb-[30px]">
        <Title class="text-[25px] leading-[150%] tracking-[0.25px] mb-3"
          >Simplicity and Functionality</Title
        >
        <Text class="mb-8"
          >Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
          turpmaximus.posuere in belief.</Text
        >
        <Text>
          There are many variations of passages of Lorem Ipsum from available,
          but the majority have suffered alteration in some form, njecthumour</Text
        >
      </div>
      <div class="flex flex-col items-start gap-y-5">
        {#each skills as skill}
          <SkillItem {...skill} />
        {/each}
      </div>
    </div>

    <div class="w-[529px]">
      <div class="mb-[19px]">
        <Title class="text-[25px] leading-[150%] tracking-[0.25px] mb-3"
          >Question And Answer</Title
        >
        <Text
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
          <div class="relative">
            <img src="/images/TeamSingle/Icons/eclipse_plus.svg" alt="" />
            <Text
              class="text-[35px] leading-[125%] tracking-[0.7px] absolute top-[-7px] right-[10px]"
              >+</Text
            >
          </div>
        </div>

        <div
          class="w-full py-[14px] px-[22px] rounded-[18px] border-[1px] border-solid border-primary bg-white flex items-center justify-between"
        >
          <Text intent="secondary">International Trade Experience?</Text>
          <div class="relative">
            <img src="/images/TeamSingle/Icons/eclipse_plus.svg" alt="" />
            <Text
              class="text-[35px] leading-[125%] tracking-[0.7px] absolute top-[-7px] right-[10px]"
              >+</Text
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
