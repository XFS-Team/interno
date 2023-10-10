<script lang="ts">
  import PriceItem from "./PriceItem.svelte";

  const prices = [
    {
      title: "Design advices",
      price: "29",
      priceColor: "text-dark-gray",
      borderColor: "border-primary border-b",
      planDisplay: "hidden",
      plan: "",
      offerItems: [
        "General living space advices",
        "Rennovation advices",
        "Interior design advices",
        "Furniture reorganization",
        "Up to 5 hours meetings",
      ],
      button: "Get Started",
      buttonColor: "bg-primary",
      arrowColor: "_black",
    },
    {
      title: "Complete interior",
      price: "39",
      priceColor: "text-primary",
      borderColor: "border-dark-gray border-b",
      plan: "Most Popular Plans",
      planDisplay: "block",
      offerItems: [
        "Complete home redesign",
        "Interior and exterior works",
        "Modular interior planning",
        "Kitchen design",
        "Garages organization",
      ],
      button: "Get Started",
      buttonColor: "",
      arrowColor: "",
    },
    {
      title: "Furniture design",
      price: "59",
      priceColor: "text-dark-gray",
      borderColor: "border-primary border-b",
      planDisplay: "hidden",
      plan: "",
      offerItems: [
        "Furniture for living room",
        "Furniture refurbishment",
        "Sofas and amchairs",
        "Tables and chairs",
        "Kitchens",
      ],
      button: "Get Started",
      buttonColor: "bg-primary",
      arrowColor: "_black",
    },
  ];
</script>

<div
  data-aos="fade-down"
  data-aos-duration="500"
  class="container my-[50px] lg:my-[150px] flex flex-col lg:flex-row justify-center gap-12"
>
  {#each prices as price}
    <PriceItem {...price} />
  {/each}
</div>
