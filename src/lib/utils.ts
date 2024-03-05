import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function hasEmptyFields(
	obj: {
		GOSnumber: string;
		make: string;
		model: string;
		releaseYear: string;
		bodyType: string;
		gearBoxType: string;
		engine: string;
		modification: string;
		TSdocument: string;
		PTSnumber: string;
		VIN: string;
	},
	excludedFields: string[]
) {
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			if (!excludedFields.includes(key) && !obj[key]) {
				return true;
			}
		}
	}
	return false;
}
