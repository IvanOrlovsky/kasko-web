import { AutoFormValues } from "@/types/forms/AutoForm";
import { ParametersFormValues } from "@/types/forms/ParametersForm";

export type MainContextType = {
	step: number;
	setStep: React.Dispatch<React.SetStateAction<number>>;
	autoData: AutoFormValues;
	setAutoData: React.Dispatch<React.SetStateAction<AutoFormValues>>;
	paramsData: ParametersFormValues;
	setParamsData: React.Dispatch<React.SetStateAction<ParametersFormValues>>;
};
