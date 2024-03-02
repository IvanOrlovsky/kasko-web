"use client";

import { TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { styled } from "@mui/material";
import InputMask from "react-input-mask";

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
	mask?: string;
	patternMsg?: string;
};

export default function SimpleInput({
	label,
	name,
	required,
	helper,
	requiredMsg,
	placeholder,
	mask,
}: SimpleInputProps) {
	const {
		control,
		formState: { errors },
		clearErrors,
	} = useFormContext();

	return (
		<Controller
			control={control}
			name={name}
			rules={{
				required: required
					? requiredMsg || "Данное поле обязательно"
					: false,
			}}
			render={({ field }) => (
				<InputMask
					mask={mask}
					maskChar=" "
					value={field.value}
					onChange={field.onChange}
				>
					{(inputProps: any) => (
						<StyledSimpleInput
							{...inputProps}
							helperText={
								errors[name]?.message
									? String(errors[name]?.message)
									: helper
							}
							placeholder={placeholder}
							label={label}
							required={required}
							fullWidth={true}
							variant="filled"
							onChange={(e) => {
								field.onChange(e);
								clearErrors(name);
							}}
							value={field.value}
							error={!!errors[name]?.message}
							className="mb-12"
						/>
					)}
				</InputMask>
			)}
		/>
	);
}
