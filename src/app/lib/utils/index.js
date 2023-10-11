import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"

export function cn(...args) {
  return twMerge(clsx(...args))
}
