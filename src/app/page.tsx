"use client";
//компоненты
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavChip from "@/components/data-display/NavChip";
import Footer from "@/components/Footer";
//блоки
import Step1 from "./_steps/Auto/Step1";
import Step2 from "./_steps/Parameters/Step2";
import Step25 from "./_steps/AutoEdit/Step25";
import Step3 from "./_steps/Risks/Step3";
import Step4 from "./_steps/PersonalData/Step4";
import Step5 from "./_steps/Payment/Step5";
//хуки
import { useMainContext } from "@/contexts/MainContext";

export default function Home() {
	const { step, setStep } = useMainContext();

	return (
		<main className="flex flex-col gap-[16px]  overflow-hidden">
			<span
				className="font-roboto w-fit text-[#1698D9]  mx-[16px] text-md sm:text-xl hover:cursor-pointer hover:text-[#19437a]"
				onClick={() => {
					if (step === 2.5) {
						setStep(2);
					}
					if (step > 1) {
						setStep((prev) => prev - 1);
					}
				}}
			>
				<ArrowBackIcon sx={{ color: "#1698D9" }} />
				Назад
			</span>
			{step !== 2.5 && (
				<>
					<h1>Каско</h1>
					<div className="flex flex-wrap flex-row w-full mx-[16px] gap-1 flex-shrink-0">
						<NavChip
							letterInCircle="1"
							label="Авто"
							active={step === 1}
							onClick={() => {
								if (step > 1) {
									setStep(1);
								}
							}}
						/>
						<NavChip
							letterInCircle="2"
							label="Параметры"
							active={step === 2}
							onClick={() => {
								if (step > 2) {
									setStep(2);
								}
							}}
						/>
						<NavChip
							letterInCircle="3"
							label="Риски"
							active={step === 3}
							onClick={() => {
								if (step > 3) {
									setStep(3);
								}
							}}
						/>
						<NavChip
							letterInCircle="4"
							label="Персональные данные"
							active={step === 4}
							onClick={() => {
								if (step > 4) {
									setStep(4);
								}
							}}
						/>
						<NavChip
							letterInCircle="5"
							label="Оплата"
							active={step === 5}
							onClick={() => {
								if (step > 5) {
									setStep(5);
								}
							}}
						/>
					</div>
				</>
			)}
			{step === 1 && <Step1 />}
			{step === 2 && <Step2 />}
			{step === 2.5 && <Step25 />}
			{step === 3 && <Step3 />}
			{step === 4 && <Step4 />}
			{step === 5 && <Step5 />}
			{step > 1 && step !== 2.5 && <Footer />}
		</main>
	);
}
