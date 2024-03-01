import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { SyntheticEvent } from "react";
import { InfoOutlined } from "@mui/icons-material";

type CheckBoxType = {
	label: string;
	defaultChecked?: boolean;
	required?: boolean;
	disabled?: boolean;
	onChange?: (
		event: SyntheticEvent<Element, Event>,
		checked: boolean
	) => void;
};

export default function CheckBox({
	label,
	defaultChecked,
	required,
	disabled,
	onChange,
}: CheckBoxType) {
	return (
		<FormGroup>
			<FormControlLabel
				disabled={disabled}
				required={required}
				control={
					<Checkbox
						className="border-[2.5px] rounded-[100px] border-[#A2ADC1]"
						defaultChecked={defaultChecked}
					/>
				}
				label={
					<>
						{label}{" "}
						<InfoOutlined sx={{ color: "#8591A9" }}></InfoOutlined>
					</>
				}
				onChange={onChange}
			/>
		</FormGroup>
	);
}
