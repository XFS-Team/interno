<script lang="ts">
  import { VariantProps, cva, cx } from "class-variance-authority";
  import type { HTMLButtonAttributes } from "svelte/elements";
  const button = cva("button", {
    variants: {
      intent: {
        default: "rounded-[18px]",
      },
      color: {
        primary: "bg-dark-gray",
        secondary: "bg-primary",
      },
    },
  });
  interface $$Props extends HTMLButtonAttributes, VariantProps<typeof button> {
    intent?: "default";
    color?: "primary" | "secondary";
  }

  export let intent: $$Props["intent"] = "default";
  export let color: $$Props["color"] = "primary";
</script>

<button {...$$props} class={button({ intent, color, class: $$props.class })}>
  <slot />
</button>
