import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Joins class names and resolves conflicting Tailwind utilities.
 *
 * Server-only. `twMerge` carries a large class-group config table, so importing
 * this from a client component ("use client") ships that table to the browser —
 * measured at roughly 30 kB of a 30 kB chunk. Client components that only need
 * conditional joining should import `clsx` from "clsx" directly instead, which
 * costs ~400 B.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
