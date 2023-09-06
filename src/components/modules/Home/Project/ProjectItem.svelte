<script>
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let image;
  export let name;
  export let description;
</script>

<div class="">
  <img src={image} alt="ProjectImage" />
  <div class="flex items-center justify-between mt-6">
    <div>
      <Title class="text-[25px] tracking-[0.5px]">
        {name}
      </Title>
      <Text>
        {description}
      </Text>
    </div>
    <img src="/images/arrow_button_default.svg" alt="arrowButton" />
  </div>
</div>
