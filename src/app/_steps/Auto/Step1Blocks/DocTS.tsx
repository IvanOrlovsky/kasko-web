//компоненты
import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import SimpleSelect from "@/components/inputs/SimpleSelect";
//хуки
import { useFormContext } from "react-hook-form";
import { useMainContext } from "@/contexts/MainContext";

export default function DocTS() {
	const { watch } = useFormContext();
	const { carFoundStatus, autoData } = useMainContext();

	if (
		(watch("isCarRegistered") || carFoundStatus === "NOT_FOUND") &&
		carFoundStatus !== "NOT_ALL"
	) {
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
						required={true}
					></SimpleSelect>
					<SimpleInput
						name="PTSnumber"
						placeholder={
							autoData.TSdocument
								? `Номер ` + autoData.TSdocument
								: `Номер ` + watch("TSdocument")
						}
						pattern={/^\d+$/}
						patternMsg="Вы ввели не число!"
						required={true}
					/>
					<SimpleInput name="VIN" placeholder="VIN" required={true} />
				</div>
			</FormBlock>
		);
	}
}
