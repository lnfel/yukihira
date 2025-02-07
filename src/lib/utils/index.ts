import ShortUniqueId from "short-unique-id"
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const shortUniqueID = new ShortUniqueId()

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
