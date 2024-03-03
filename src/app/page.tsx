"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavChip from "@/components/data-display/NavChip";
import Step1 from "./_steps/Auto/Step1";
import { useMainContext } from "@/contexts/MainContext";
import Step2 from "./_steps/Parameters/Step2";
import Footer from "@/components/Footer";

export default function Home() {
	const { step, setStep } = useMainContext();

	return (
		<main className="flex flex-col gap-[16px]  overflow-hidden">
			<span
				className="font-roboto w-fit text-[#1698D9]  mx-[16px] text-md sm:text-xl hover:cursor-pointer hover:text-[#19437a]"
				onClick={() => {
					if (step > 1) {
						setStep((prev) => prev - 1);
					}
				}}
			>
				<ArrowBackIcon sx={{ color: "#1698D9" }} />
				Назад
			</span>
			<h1 className="font-roboto w-fit font-semibold text-2xl sm:text-4xl mx-[16px]">
				Каско
			</h1>
			<div className="flex flex-wrap flex-row w-full mx-[16px] gap-1 flex-shrink-0">
				<NavChip letterInCircle="1" label="Авто" active={step === 1} />
				<NavChip
					letterInCircle="2"
					label="Параметры"
					active={step === 2}
				/>
				<NavChip letterInCircle="3" label="Риски" active={step === 3} />
				<NavChip
					letterInCircle="4"
					label="Персональные данные"
					active={step === 4}
				/>
				<NavChip
					letterInCircle="5"
					label="Оплата"
					active={step === 4}
				/>
			</div>
			{step === 1 && <Step1 />}
			{step === 2 && <Step2 />}
			{step > 1 && <Footer />}
		</main>
	);
}
