import FormBlock from "@/components/FormBlock";
import BigCheck from "@/components/inputs/BigCheck";

export default function InsuranseRisks() {
	return (
		<FormBlock
			title="Страховые риски"
			hasSubmitBtn={false}
			submitBtnLabel=""
		>
			<BigCheck
				name="crime"
				title="Хищение и ущерб"
				text="В ущерб входит покрытие в случае, если машину повредили вследствие ДТП, стихийных бедствий, пожара, противоправных действий третьих лиц, падение деревьев и т.д."
				defaultChecked={true}
			/>
			<BigCheck
				name="gap"
				title="Гарантия стоимости (GAP)"
				text="В случае угона или гибели авто сделаем выплату без учета его износа"
			/>
		</FormBlock>
	);
}
