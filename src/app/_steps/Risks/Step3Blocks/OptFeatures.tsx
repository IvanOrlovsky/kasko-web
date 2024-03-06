import FormBlock from "@/components/FormBlock";
import BigCheck from "@/components/inputs/BigCheck";

export default function OptFeatures() {
	return (
		<FormBlock
			title="Дополнительные опции"
			hasSubmitBtn={true}
			submitBtnLabel="Продолжить"
		>
			<BigCheck
				name="accident"
				title="Несчастный случай"
				text="Выплата компенсации при несчастном случае в авто (травма, утопление, переохлаждение, острое отравление и т.д.)"
			/>
		</FormBlock>
	);
}
