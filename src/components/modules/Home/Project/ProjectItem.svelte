<script lang="ts">
  import Text from "../../../common/Text/Text.svelte";
  import Title from "../../../common/Title/Title.svelte";

  export let image: string;
  export let name: string;
  export let description: string;
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
