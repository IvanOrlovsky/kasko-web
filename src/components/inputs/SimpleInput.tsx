"use client";

import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
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
		control,
		formState: { errors },
	} = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<StyledSimpleInput
					helperText={
						errors[name]?.message
							? String(errors[name]?.message)
							: helper
					}
					placeholder={placeholder}
					fullWidth
					label={label}
					variant="filled"
					{...field}
					error={!!errors[name]}
				/>
			)}
			rules={{
				required: required
					? {
							value: true,
							message: requiredMsg
								? requiredMsg
								: "Обязательное поле",
					  }
					: false,
				pattern: pattern
					? {
							value: pattern,
							message: patternMsg || "Неверный формат",
					  }
					: undefined,
			}}
		/>
	);
}
