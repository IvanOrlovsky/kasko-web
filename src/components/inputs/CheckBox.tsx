"use client";

import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InfoHint from "../interactive-icons/InfoHint";
import { useFormContext } from "react-hook-form";
import { CheckBoxProps } from "@/types/components/inputs/CheckBox";

export default function CheckBox({
	label,
	defaultChecked,
	required,
	disabled,
	onChange,
	hint,
	name,
}: CheckBoxProps) {
	const { register } = useFormContext();
	return (
		<FormGroup>
			<Grid container alignItems="center">
				<Grid item>
					<FormControlLabel
						className="font-roboto text-[#1F232B] text-base font-normal"
						disabled={disabled}
						required={required}
						control={
							<Checkbox
								{...register(name)}
								className="text-[#A2ADC1]"
								defaultChecked={defaultChecked}
							/>
						}
						label={label}
						onChange={onChange}
					/>
				</Grid>
				{hint && (
					<Grid item>
						<InfoHint hint={hint} />
					</Grid>
				)}
			</Grid>
		</FormGroup>
	);
}
