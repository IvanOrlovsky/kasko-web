import { AutoFormValues } from "@/types/forms/AutoForm";
import { ParametersFormValues } from "@/types/forms/ParametersForm";
import { RisksFormValues } from "@/types/forms/RisksForm";

export type MainContextType = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
	autoData: AutoFormValues;
	setAutoData: React.Dispatch<React.SetStateAction<AutoFormValues>>;
	risksData: RisksFormValues;
	setRisksData: React.Dispatch<React.SetStateAction<RisksFormValues>>;
	paramsData: ParametersFormValues;
	setParamsData: React.Dispatch<React.SetStateAction<ParametersFormValues>>;
	carFoundStatus: "NOT_ENTERED" | "NOT_ALL" | "ALL" | "NOT_FOUND";
	setCarFoundStatus: React.Dispatch<
		React.SetStateAction<"NOT_ENTERED" | "NOT_ALL" | "ALL" | "NOT_FOUND">
	>;
};
