import { cn } from "@/lib/utils";

/**
 * Shared section title. Colour is inherited from the surrounding section, so
 * light and dark sections get the right contrast without passing a variant.
 */
export function SectionHeading({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-3xl font-bold tracking-tight sm:text-4xl", className)}
      {...props}
    />
  );
}
