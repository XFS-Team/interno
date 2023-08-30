<script lang="ts">
  import { VariantProps, cva } from "class-variance-authority";
  import type { HTMLButtonAttributes } from "svelte/elements";

  const text = cva("text", {
    variants: {
      intent: {
        default:
          "text-[22px] font-normal font-sans leading-[150%] tracking-[0.22px]",
        secondary:
          "text-lg font-semibold font-sans leading-[125%] tracking-[0.36px]",
      },
      color: {
        default: "text-slate",
        secondary: "text-white",
        tertiary: "text-primary",
      },
    },
  });

  interface $$Props extends VariantProps<typeof text> {
    intent?: "default" | "secondary";
    color?: "default" | "secondary";
    class?: string;
  }
  
  export let intent: $$Props["intent"] = "default";
  export let color: $$Props["color"] = "default";
</script>

<p {...$$props} class={text({ intent, color, class: $$props.class })}>
  <slot />
</p>
