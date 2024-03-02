"use client";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useFormContext } from "react-hook-form";
import { styled } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";

const StyledSimpleSelect = styled(Select)({
	"& .MuiTextField-root": {
		backgroundColor: "#F1F2F6",
		borderRadius: "4px",
		border: "2px solid #A2ADC1",
	},
});

type SimpleSelectProps = {
	label?: string;
	name: string;
	data: string[];
	required?: boolean;
	requiredMsg?: string;
};

export default function SimpleSelect({
	label,
	name,
	data,
	required,
	requiredMsg,
}: SimpleSelectProps) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	const [value, setValue] = useState("");

	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value);
	};

	return (
		<FormControl variant="filled">
			<InputLabel id={name + "_label"}>{label}</InputLabel>
			<StyledSimpleSelect
				id={name}
				labelId={name + "_label"}
				required={required}
				value={value}
				{...register(name, {
					onChange: handleChange,
					required: required ? requiredMsg : false,
				})}
				error={!!errors[name]?.message}
				className="mb-12"
			>
				{data.map((option) => (
					<MenuItem value={option}>{option}</MenuItem>
				))}
			</StyledSimpleSelect>

			{errors[name]?.message && (
				<FormHelperText error>
					{errors[name]?.message as string}
				</FormHelperText>
			)}
		</FormControl>
	);
}
