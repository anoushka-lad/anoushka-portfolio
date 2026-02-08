import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Round to 6 decimal places — eliminates SSR/client hydration mismatches in SVG coordinates */
export const r = (n: number) => Math.round(n * 1e6) / 1e6;
