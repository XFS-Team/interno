<script lang="ts">
  import Logo from "../../common/Logo/Logo.svelte";
  import Text from "../../common/Text/Text.svelte";
  import Title from "../../common/Title/Title.svelte";

  const iconData = [
    {
      link: "/",
      image: "/images/Footer/facebook.svg",
    },
    {
      link: "/",
      image: "/images/Footer/twitter.svg",
    },
    {
      link: "/",
      image: "/images/Footer/linkedIn.svg",
    },
    {
      link: "/",
      image: "/images/Footer/instagram.svg",
    },
  ];

  const pages = [
    { url: "/", label: "About Us" },
    { url: "/", label: "Our Projects" },
    { url: "/", label: "Our Team" },
    { url: "/", label: "Contact Us" },
    { url: "/", label: "Services" },
  ];

  const services = [
    { url: "/", label: "Kitchen" },
    { url: "/", label: "Living Area" },
    { url: "/", label: "Bathroom" },
    { url: "/", label: "Dining Hall" },
    { url: "/", label: "Bedroom" },
  ];

  const contacts = [
    {
      info: "55 East Birchwood Ave. Brooklyn, New York 11201",
    },
    { info: "contact@interno.com" },
    { info: "(123) 456 - 7890" },
  ];
</script>

<div>
  <div class="container">
    <div class="flex justify-between">
      <div>
        <Logo />
        <Text class="mt-[18px] max-w-[393px]">
          It is a long established fact that a reader will be distracted
          lookings.
        </Text>
        <ul class="flex items-center gap-[54px] mt-[31px]">
          {#each iconData as icon}
            <li>
              <a href={icon.link}>
                <img class="w-[23px] h-[23px]" src={icon.image} alt="icon" />
              </a>
            </li>
          {/each}
        </ul>
      </div>
      <ul class="text-[22px]">
        <li>
          <Title class="text-[25px] mb-[9px]">Pages</Title>
        </li>
        {#each pages as page}
          <li class="leading-[66px] text-slate">
            <a href={page.url}>
              <Text class="leading-[300%] tracking-[0.22px]">{page.label}</Text>
            </a>
          </li>
        {/each}
      </ul>
      <ul class="text-[22px]">
        <li>
          <Title class="text-[25px] mb-[9px]">Services</Title>
        </li>
        {#each services as service}
          <li class="leading-[66px] text-slate">
            <a href={service.url}>
              <Text class="leading-[300%] tracking-[0.22px]"
                >{service.label}
              </Text>
            </a>
          </li>
        {/each}
      </ul>
      <ul class="text-[22px] max-w-[258px]">
        <li class="mb-4">
          <Title class="text-[25px] mb-[26px]">Contact</Title>
        </li>
        {#each contacts as contact}
          <li class="mb-[33px]">
            <Text class="tracking-[0.22px]">{contact.info}</Text>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="border-t mt-[134px] pt-10 pb-[46px]">
    <img class="mx-auto" src="/images/copyright.svg" alt="copyright" />
  </div>
</div>
