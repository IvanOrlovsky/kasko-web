import FormBlock from "@/components/FormBlock";
import BigCheck from "@/components/inputs/BigCheck";

export default function Service() {
	return (
		<FormBlock
			title="Сервисные опции"
			hasSubmitBtn={false}
			submitBtnLabel=""
		>
			<BigCheck
				name="evacuation"
				title="Эвакуация"
				text="Транспортируем ваш автомобиль в случае аварии или поломки"
			/>
			<BigCheck
				name="carAccidentCommisar"
				title="Аварийный комиссар"
				text="Наш специалист прибудет на место ДТП для оформления всех необходимых документов и оценки ущерба"
			/>
			<BigCheck
				name="techHelp"
				title="Техническая помощь"
				text="Окажем вам помощь на дороге при возникновении технических проблем с вашим автомобилем"
			/>
		</FormBlock>
	);
}
