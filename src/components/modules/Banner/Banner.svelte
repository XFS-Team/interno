<script>
  import Text from "../../common/Text/Text.svelte";
  import Title from "../../common/Title/Title.svelte";

  export let image;
  export let title;
  export let pageName;
</script>

<div class="relative">
  <img class="mx-auto" src={image} alt="banner" />
  <div {...$$props}
    class="absolute bottom-0 right-0 left-0 mx-auto bg-white rounded-t-[37px] max-w-[503px] {$$props.class}"
  >
    <Title class="text-[50px] text-center">{title}</Title>
    <Text class="text-center">{pageName}</Text>
  </div>
</div>
