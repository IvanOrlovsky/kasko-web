"use client";

import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { useFormContext, Controller } from "react-hook-form";
import { styled } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

const StyledSimpleSelect = styled(Select)({
	"& .MuiSelect-filled": {
		backgroundColor: "#F1F2F6",
		borderRadius: "4px",
		border: "2px solid #A2ADC1",
		outline: "",
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
				rules={{
					shouldUnregister: true,
					required:
						required &&
						(requiredMsg ? requiredMsg : "Обязательное поле"),
				}}
				render={({ field }) => (
					<>
						<StyledSimpleSelect
							{...field}
							labelId={name + "_label"}
							error={!!errors[name]}
							disableUnderline
							sx={{
								"& .Mui-error": {
									backgroundColor: "#FEE7EA",
									borderRadius: "4px",
									border: "2px solid #F3566A",
								},
							}}
						>
							{data.map((option) => (
								<MenuItem key={option} value={option}>
									{option}
								</MenuItem>
							))}
						</StyledSimpleSelect>
						<label
							className={
								errors[name]?.message
									? "font-roboto font-normal text-sm text-[#F3566A]"
									: "font-roboto font-normal text-sm text-[#737B8C]"
							}
						>
							{errors[name]?.message
								? String(errors[name]?.message)
								: ""}
						</label>
					</>
				)}
			/>
		</FormControl>
	);
}
