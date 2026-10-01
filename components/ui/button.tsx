import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-md border bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all duration-200 ease-out outline-none select-none focus-visible:ring-2 focus-visible:ring-qeic-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-qeic-500 bg-qeic-500 text-white shadow-sm hover:border-qeic-600 hover:bg-qeic-600 active:translate-y-px",
        outline:
          "border-border bg-transparent text-foreground hover:border-qeic-400 hover:bg-qeic-50 active:translate-y-px dark:hover:bg-qeic-900/40",
        ghost:
          "border-transparent text-qeic-600 hover:bg-qeic-50 hover:text-qeic-700 dark:text-qeic-300 dark:hover:bg-qeic-900/40",
        inverse:
          "border-white bg-white text-charcoal shadow-sm hover:bg-white/90 active:translate-y-px",
        "inverse-outline":
          "border-white/40 bg-transparent text-white hover:border-white hover:bg-white/10 active:translate-y-px",
        link: "border-transparent text-qeic-600 underline-offset-4 hover:underline dark:text-qeic-300",
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-7",
        icon: "size-10",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
