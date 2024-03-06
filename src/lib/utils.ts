import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function hasEmptyFields(obj: Object, excludedFields: string[]) {
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			if (!excludedFields.includes(key) && !obj[key]) {
				return true;
			}
		}
	}
	return false;
}
