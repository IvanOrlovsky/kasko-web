"use client";

import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { styled } from "@mui/material";

const StyledSimpleInput = styled(TextField)({
	height: "3em",
	"& .MuiTextField-root": {
		backgroundColor: "#F1F2F6",
		borderRadius: "4px",
		border: "2px solid #A2ADC1",
	},
});

type SimpleInputProps = {
	label?: string;
	name: string;
	required?: boolean;
	requiredMsg?: string;
	helper?: string;
	placeholder?: string;
	pattern?: RegExp;
	patternMsg?: string;
};

export default function SimpleInput({
	label,
	name,
	required,
	helper,
	requiredMsg,
	placeholder,
	pattern,
	patternMsg,
}: SimpleInputProps) {
	const { register, setValue } = useFormContext();
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let value = event.target.value;

		if (pattern) {
			value = value.replace(pattern, "");
		}

		setValue(name, value);
	};
	return (
		<StyledSimpleInput
			helperText={helper}
			placeholder={placeholder}
			label={label}
			required={required}
			variant="filled"
			{...register(name, {
				required: required ? requiredMsg : false,
				pattern: pattern
					? { value: pattern, message: patternMsg as string }
					: undefined,
			})}
			className="mb-12"
		></StyledSimpleInput>
	);
}
