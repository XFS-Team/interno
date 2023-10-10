<script lang="ts">
  import Text from "../../common/Text/Text.svelte";
  import Title from "../../common/Title/Title.svelte";

  export let image: string;
  export let title: string;
  export let pageName: string;
</script>

<div class="lg:relative">
  <img class="mx-auto" src={image} alt="banner" />
  <div
    {...$$props}
    class="lg:absolute bottom-0 right-0 left-0 mx-auto bg-white rounded-t-[37px] max-w-[503px] {$$props.class}"
  >
    <Title class="text-[25px] lg:text-[50px] text-center">{title}</Title>
    <Text class="text-center">{pageName}</Text>
  </div>
</div>
