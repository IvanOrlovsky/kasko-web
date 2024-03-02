"use client";

import FormBlock from "@/components/FormBlock";
import RangeInput from "@/components/inputs/RangeInput";
import AutoComplete from "@/components/inputs/AutoComplete";
import Regions from "../../../../public/datasets/Regions.json";
import { useFormContext } from "react-hook-form";

export default function InsuranceParams() {
	return (
		<FormBlock title="Параметры страховки">
			<>
				<AutoComplete
					name="region"
					title="Регион использования ТС"
					dataset={Regions}
				/>
			</>
		</FormBlock>
	);
}
