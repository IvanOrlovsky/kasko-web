"use client";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import NavChip from "@/components/data-display/NavChip";

export default function Home() {
	return (
		<main className="flex flex-col gap-[16px]  overflow-hidden">
			<span className="font-roboto w-fit text-[#1698D9]  mx-[16px] text-md sm:text-xl hover:cursor-pointer hover:text-[#19437a]">
				<ArrowBackIcon sx={{ color: "#1698D9" }} />
				Назад
			</span>
			<h1 className="font-roboto w-fit font-semibold text-2xl sm:text-4xl mx-[16px]">
				Каско
			</h1>
			<div className="flex flex-wrap flex-row w-full mx-[16px] gap-1 flex-shrink-0">
				<NavChip letterInCircle="1" label="Авто" active={true} />
				<NavChip letterInCircle="2" label="Параметры" active={false} />
				<NavChip letterInCircle="3" label="Риски" active={false} />
				<NavChip
					letterInCircle="4"
					label="Персональные данные"
					active={false}
				/>
			</div>
		</main>
	);
}
