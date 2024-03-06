import { useFormContext } from "react-hook-form";
import { useState } from "react";

import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CheckIcon from "@mui/icons-material/Check";
import { InfoOutlined } from "@mui/icons-material";

import { BigCheckProps } from "@/types/components/inputs/BigCheck";

import { cn } from "@/lib/utils";

export default function BigCheck({
	name,
	title,
	text,
	defaultChecked,
}: BigCheckProps) {
	const [checked, setChecked] = useState(false);
	const { register, setValue } = useFormContext();
	return (
		<div
			className={cn(
				"flex flex-row gap-3 justify-start bg-white rounded-lg border-2 border-[#DCE1EF] p-4",
				{
					"hover:cursor-pointer": !defaultChecked,
				}
			)}
			onClick={() => {
				if (!defaultChecked) {
					setValue(name, !checked);
					setChecked(!checked);
				}
			}}
		>
			<input type="hidden" {...register(name)} />
			<div>
				{defaultChecked && <CheckIcon color="success" />}
				{!defaultChecked && checked && (
					<CheckCircleIcon color="success" />
				)}
				{!defaultChecked && !checked && <RadioButtonUncheckedIcon />}
			</div>
			<div className="self-stretch grow flex flex-col gap-1">
				<h2>{title}</h2>
				<p className="kasko-subtext">{text}</p>
			</div>
			<InfoOutlined sx={{ color: "#8591A9" }} />
		</div>
	);
}
