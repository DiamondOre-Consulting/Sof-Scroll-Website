import { clsx } from "clsx";  // Only import clsx itself
import { twMerge } from "tailwind-merge";

// A utility function to merge classnames using both clsx and twMerge
export function cn(...inputs) {
  return twMerge(clsx(...inputs)); // Correct usage: Spread inputs to both functions
}
