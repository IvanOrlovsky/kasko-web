"use client";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useFormContext, Controller } from "react-hook-form";
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
		formState: { errors },
		control,
	} = useFormContext();

	return (
		<FormControl variant="filled" sx={{ minWidth: 120 }}>
			<InputLabel id={name + "_label"}>{label}</InputLabel>
			<Controller
				control={control}
				name={name}
				rules={{ required: required && requiredMsg }}
				render={({ field }) => (
					<>
						<Select
							{...field}
							labelId={name + "_label"}
							error={!!errors[name]}
						>
							{data.map((option) => (
								<MenuItem key={option} value={option}>
									{option}
								</MenuItem>
							))}
						</Select>
						{errors[name]?.message && (
							<FormHelperText error>
								{errors[name]?.message as string}
							</FormHelperText>
						)}
					</>
				)}
			/>
		</FormControl>
	);
}
