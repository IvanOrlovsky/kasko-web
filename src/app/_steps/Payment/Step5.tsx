"use client";

import FormBlock from "@/components/FormBlock";
import AutoCard from "@/components/data-display/AutoCard";
import InsuranseCard from "@/components/data-display/InsuranseCard";
import RisksCard from "@/components/data-display/RisksCard";
import PersonalDataCard from "@/components/data-display/PersonalDataCard";
import PaymentCard from "@/components/PaymentCard";
import Accordion from "@/components/data-display/Accordion";
import CheckBox from "@/components/inputs/CheckBoxes";

import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMainContext } from "@/contexts/MainContext";

import { InfoOutlined } from "@mui/icons-material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import Swal from "sweetalert2";

export default function Payment() {
	const form = useForm<{ conditions: boolean; special: boolean }>();
	const [showPay, setShowPay] = useState(false);
	const router = useRouter();

	const onSubmit = async () => {
		if (await form.trigger()) {
			setShowPay(true);
		}
	};

	const {
		personalData: { email },
	} = useMainContext();

	return (
		<>
			<FormProvider {...form}>
				<form id="final_check" onSubmit={form.handleSubmit(onSubmit)}>
					<FormBlock
						title="Проверьте данные"
						forForm="final_check"
						hasSubmitBtn={!showPay}
						submitBtnLabel="Перейти к оплате XXXX рублей"
					>
						<>
							<div className="flex flex-col gap-3 my-5">
								<Accordion title="Автомобиль">
									<AutoCard />
								</Accordion>
								<Accordion title="Параметры страховки">
									<InsuranseCard />
								</Accordion>
								<Accordion title="Страховые риски и опции">
									<RisksCard />
								</Accordion>
								<Accordion title="Персональные данные">
									<PersonalDataCard />
								</Accordion>
							</div>
							<div className="flex flex-row font-roboto text-base bg-[#F1F2F6] rounded-2xl p-3 gap-2 mb-3">
								<div className="self-start">
									<InfoOutlined />
								</div>
								<div>
									<h3 className="font-bold">
										Осмотр автомобиля
									</h3>
									<p className="self-stretch font-normal ">
										Необходимо произвести самостоятельный
										осмотр автомобиля через мобильное
										приложение. Ссылку на приложение
										и данные для входа вы получите
										в СМС сообщении Полис не начнёт
										действовать пока страховщик
										не ознакомится с результатами осмотра.
									</p>
									<span
										className="text-kasko-blue hover:underline cursor-pointer"
										onClick={() => {
											Swal.fire(
												"Переход на платформу для установки приложения"
											);
										}}
									>
										Скачать приложение для осмотра
									</span>
								</div>
							</div>
							<div className="mb-3">
								<h2>Ваши документы</h2>
								<p className="kasko-subtext">
									Документы можно скачать ниже. Они
									действительны только после оплаты
								</p>
								<div className="mt-2 flex flex-col gap-2 font-roboto text-base">
									<span
										className="flex flex-row gap-2 cursor-pointer"
										onClick={() => {
											Swal.fire(
												"Переход на скачивание документа"
											);
										}}
									>
										<DescriptionOutlinedIcon />
										Ключевой информационный документ
									</span>
									<span
										className="flex flex-row gap-2 cursor-pointer"
										onClick={() => {
											Swal.fire(
												"Переход на скачивание документа"
											);
										}}
									>
										<DescriptionOutlinedIcon />
										Страховой полис
									</span>
									<span
										className="flex flex-row gap-2 cursor-pointer"
										onClick={() => {
											Swal.fire(
												"Переход на скачивание документа"
											);
										}}
									>
										<DescriptionOutlinedIcon />
										Правила страхования
									</span>
									<span
										className="flex flex-row gap-2 cursor-pointer"
										onClick={() => {
											Swal.fire(
												"Переход на скачивание документа"
											);
										}}
									>
										<DescriptionOutlinedIcon />
										Памятка
									</span>
								</div>
							</div>
							<CheckBox
								name="conditions"
								required={true}
								label="Принимаю условия страхового полиса, правил страхования и соглашения о безакцептном списании денежных средств"
							/>
							<CheckBox
								name="special"
								required={true}
								label="Соглашаюсь на получение специальных предложений, скидок и полезных рекомендаций"
							/>
						</>
					</FormBlock>
				</form>
			</FormProvider>
			{showPay && (
				<PaymentCard
					onSubmit={() => {
						router.push(`/paymentSuccess?email=${email}`);
					}}
				/>
			)}
		</>
	);
}
