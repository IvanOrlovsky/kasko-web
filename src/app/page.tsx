import RangeInput from "@/components/inputs/RangeInput";
import AutoComplete from "@/components/inputs/AutoComplete";
import CheckBox from "@/components/inputs/CheckBox";
import Regions from "../../public/datasets/Regions.json";

export default function Home() {
	return (
		<main className="flex flex-col gap-[20px] items-center justify-center min-h-screen w-full">
			<CheckBox label="Авто ещё не застраховано" />
			<AutoComplete dataset={Regions} title="Регион использования ТС" />
			<AutoComplete dataset={Regions} title="Регион использования ТС" />
			<RangeInput
				isDate={true}
				title={"Срок кредитования"}
				marks={[
					{
						value: 1,
						label: "1 месяц",
					},
					{
						value: 6,
						label: "6 месяцев",
					},
					{
						value: 12,
						label: "1 год",
					},
				]}
			></RangeInput>
			<RangeInput
				title={"Текущая рыночная стоимость"}
				isCurrency={true}
				min={10000}
				max={3000000}
				step={1000}
			></RangeInput>
			<RangeInput
				title={"Набор числа"}
				min={0}
				max={3000000}
			></RangeInput>
		</main>
	);
}
