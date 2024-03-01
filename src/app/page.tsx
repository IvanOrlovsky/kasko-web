import RangeInput from "@/components/inputs/RangeInput";
export default function Home() {
	return (
		<main className="flex flex-col items-center justify-center min-h-screen">
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
