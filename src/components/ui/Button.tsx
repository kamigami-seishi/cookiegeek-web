import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva("cg-button", {
  variants: {
    variant: {
      default: "cg-button--gold",
      primary: "cg-button--gold",
      outline: "cg-button--outline",
      ink: "cg-button--ink",
      secondary: "cg-button--light",
      ghost: "cg-button--ghost",
      link: "cg-button--link",
      destructive: "cg-button--destructive",
    },
    size: {
      default: "cg-button--default",
      sm: "cg-button--sm",
      lg: "cg-button--lg",
      icon: "cg-button--icon",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
