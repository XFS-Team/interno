<script lang="ts">
  import { VariantProps, cva } from "class-variance-authority";
  import type { HTMLButtonAttributes } from "svelte/elements";

  const title = cva("title", {
    variants: {
      intent: {
        default: "font-normal font-serif leading-[125%]",
      },
      color: {
        default: "text-dark-gray",
        secondary: "text-primary",
      },
    },
  });

  interface $$Props extends VariantProps<typeof title> {
    intent?: "default";
    color?: "default" | "secondary";
    class?: string;
  }

  export const intent: $$Props["intent"] = "default";
  export let color: $$Props["color"] = "default";
</script>

<h1 {...$$props} class={title({ intent, color, class: $$props.class })}>
  <slot />
</h1>
