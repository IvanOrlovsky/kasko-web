"use client";

import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InfoHint from "../interactive-icons/InfoHint";

type CheckBoxType = {
	label: string;
	defaultChecked?: boolean;
	required?: boolean;
	disabled?: boolean;
	onChange?: (
		event: React.SyntheticEvent<Element, Event>,
		checked: boolean
	) => void;
	hint?: string;
};

export default function CheckBox({
	label,
	defaultChecked,
	required,
	disabled,
	onChange,
	hint,
}: CheckBoxType) {
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
