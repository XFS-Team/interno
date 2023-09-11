<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let avatar: string;
  export let name: string;
  export let address: string;
  export let bio: string;
</script>

<div class="relative">
  <img
    src="/images/Homepage/Testimonial/bg_testimonial_content.svg"
    alt="testimonial-content"
  />
  <div class="absolute top-[53px] left-[37px] max-w-[296px]">
    <div class="flex items-center gap-[23px]">
      <img src={avatar} alt="person1" />
      <div>
        <Title class="text-[22px] tracking-[0.25px]">
          {name}
        </Title>
        <Text class="text-lg tracking-[0.18px]">
          {address}
        </Text>
      </div>
    </div>
    <Text class="mt-[25px] text-justify">
      {bio}
    </Text>
  </div>
</div>
