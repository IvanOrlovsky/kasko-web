export type SimpleInputProps = {
	name: string;
	required?: boolean;
	requiredMsg?: string;
	helper?: string;
	placeholder?: string;
	mask: string;
	formatChars?: Record<string, string>;
	uppercase?: boolean;
};
