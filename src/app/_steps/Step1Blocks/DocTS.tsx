import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import SimpleSelect from "@/components/inputs/SimpleSelect";
import { useFormContext } from "react-hook-form";

export default function DocTS() {
	const { watch } = useFormContext();

	if (watch("isCarRegistered")) {
		return (
			<FormBlock title="Документ ТС">
				<div className="flex flex-col gap-4">
					<SimpleSelect
						data={[
							"ПТС",
							"ЭПТС",
							"СТС",
							"ТСП",
							"АТС",
							"ИТС",
							"МТС",
							"УТС",
							"КТС",
							"ВТС",
							"ЛТС",
						]}
						name="TSdocument"
						label="Документ ТС"
						required={watch("isCarRegistered")}
					></SimpleSelect>
					<SimpleInput
						name="todayCost"
						placeholder="Текущая рыночная стоимость"
						pattern={/^\d+$/}
						patternMsg="Вы ввели не число!"
						required={watch("isCarRegistered")}
					/>
					<SimpleInput
						name="VIN"
						placeholder="VIN"
						required={watch("isCarRegistered")}
					/>
				</div>
			</FormBlock>
		);
	}
}
