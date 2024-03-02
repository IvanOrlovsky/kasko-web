import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import SimpleSelect from "@/components/inputs/SimpleSelect";
import { useFormContext } from "react-hook-form";

export default function DocTS() {
	const { watch, trigger } = useFormContext();

	return (
		<FormBlock title="Документ ТС">
			<>
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
					requiredMsg="Вы не ввели документ ТС!"
				></SimpleSelect>
				<SimpleInput
					name="todayCost"
					label="Текущая рыночная стоимость"
					pattern={/^\d+$/}
					patternMsg="Вы ввели не число!"
					required={!watch("isCarRegistered")}
					requiredMsg="Если авто зарегистрировано, то необходимо ввести госномер."
				/>
			</>
		</FormBlock>
	);
}
