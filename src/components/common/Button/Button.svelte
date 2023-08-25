<script lang="ts">
  import { VariantProps, cva } from "class-variance-authority";
  import clsx from "clsx";
  import type { HTMLButtonAttributes } from "svelte/elements";

  const button = cva("button", {
    variants: {
      intent: {
        default:
          "text-lg leading-[125%] text-center tracking-[0.36px] font-semibold px-[54px] py-[26px] rounded-[18px] shadow-button",
      },
      color: {
        primary: "bg-dark-gray text-white",
        secondary: "bg-primary text-white",
      },
    },
  });

  interface $$Props extends HTMLButtonAttributes, VariantProps<typeof button> {
    intent?: "default";
    color?: "primary" | "secondary";
    className?: string;
  }
  export let intent: $$Props["intent"] = "default";
  export let color: $$Props["color"] = "primary";
  export let className = "";
</script>

<button class={clsx(button({ intent, color }), className)}>
  <slot />
</button>
