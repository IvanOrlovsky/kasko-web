"use client";

import { TextField } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { styled } from "@mui/material";

const StyledSimpleInput = styled(TextField)({
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
	const {
		register,
		formState: { errors },
		clearErrors,
	} = useFormContext();

	return (
		<StyledSimpleInput
			helperText={
				errors[name]?.message
					? (errors[name]?.message as string)
					: helper
			}
			placeholder={placeholder}
			fullWidth
			label={label}
			variant="filled"
			{...register(name, {
				onChange: () => clearErrors(name),
				required: required
					? requiredMsg
						? requiredMsg
						: "Обязательное поле"
					: false,
				pattern: pattern
					? { value: pattern, message: patternMsg as string }
					: undefined,
			})}
			error={!!errors[name]?.message}
		></StyledSimpleInput>
	);
}
