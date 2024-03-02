"use client";

import Regions from "../../../public/datasets/Regions.json";
import { useState } from "react";

import RangeInput from "@/components/inputs/RangeInput";
import AutoComplete from "@/components/inputs/AutoComplete";
import CheckBox from "@/components/inputs/CheckBox";
import NavChip from "@/components/data-display/NavChip";

export default function Test() {
	const [active, setActive] = useState(false);

	return (
		<main className="p-10 flex flex-col gap-5 items-center justify-center min-h-screen w-full">
			<NavChip
				letterInCircle="2"
				label="Авто"
				disabled={true}
				active={active}
			/>
			<NavChip
				letterInCircle="1"
				label="Авто"
				active={active}
				onClick={() => setActive(!active)}
			/>
			<CheckBox name="" label="Авто ещё не застраховано" />
			<CheckBox
				name=""
				label="Авто ещё не застраховано"
				hint="Некая дополнительная информация"
			/>
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
