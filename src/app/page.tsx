import RangeInput from "@/components/inputs/RangeInput";
export default function Home() {
	return (
		<main className="flex items-center justify-center min-h-screen">
			<RangeInput
				isDate={true}
				title={"Текущая рыночная стоимость"}
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
		</main>
	);
}
