<script>
  import Logo from "../../common/Logo/Logo.svelte";
  import Text from "../../common/Text/Text.svelte";

  const menuItems = ["Home", "Pages", "Services", "Project", "Blog", "Contact"];
</script>

<div class="flex justify-between items-center">
  <Logo />
  <ul class="flex gap-[38px] items-center">
    {#each menuItems as menuItem}
      <li>
        <a href="/">
          <Text class="text-xl">{menuItem}</Text>
        </a>
      </li>
    {/each}
    <li class="cursor-pointer">
      <img src="/images/search.svg" alt="search" />
    </li>
  </ul>
</div>
