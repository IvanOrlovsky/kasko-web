import FormBlock from "@/components/FormBlock";
import SimpleInput from "@/components/inputs/SimpleInput";
import { useMainContext } from "@/contexts/MainContext";
import { useFormContext } from "react-hook-form";

export default function Drivers() {
	const { watch } = useFormContext();
	const { carFoundStatus } = useMainContext();

	if (
		watch("isCarRegistered") ||
		carFoundStatus === "NOT_FOUND" ||
		carFoundStatus === "NOT_ALL"
	) {
		return (
			<FormBlock
				title="Водители"
				forForm="auto_form"
				hasSubmitBtn={true}
				submitBtnLabel="Продолжить"
			>
				<div className="flex flex-col gap-4">
					<SimpleInput
						name="minDriversAge"
						placeholder="Минимальный возраст водителей"
						required={watch("isCarRegistered")}
						pattern={/^\d+$/}
						patternMsg="Вы ввели не число!"
					/>
					<SimpleInput
						name="minDriversExp"
						placeholder="Минимальный стаж водителей"
						required={watch("isCarRegistered")}
						pattern={/^\d+$/}
						patternMsg="Вы ввели не число!"
					/>
				</div>
			</FormBlock>
		);
	}
}
