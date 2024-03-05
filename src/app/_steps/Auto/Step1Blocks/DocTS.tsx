import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import SimpleSelect from "@/components/inputs/SimpleSelect";
import { useFormContext } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";

export default function DocTS() {
	const { watch } = useFormContext();
	const { carFoundStatus, autoData } = useMainContext();

	if (watch("isCarRegistered") || carFoundStatus === "NOT_FOUND") {
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
						name="PTSnumber"
						placeholder={`Номер ` + autoData.TSdocument}
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
