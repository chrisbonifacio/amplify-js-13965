import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { BillingInformation } from "./graphql/types";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BillingInformationUpdateFormInputValues = {
    identityCard?: string;
    companyName?: string;
    address?: string;
    city?: string;
    municipality?: string;
    owner?: string;
};
export declare type BillingInformationUpdateFormValidationValues = {
    identityCard?: ValidationFunction<string>;
    companyName?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    municipality?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BillingInformationUpdateFormOverridesProps = {
    BillingInformationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    identityCard?: PrimitiveOverrideProps<TextFieldProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    municipality?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BillingInformationUpdateFormProps = React.PropsWithChildren<{
    overrides?: BillingInformationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    billingInformation?: BillingInformation;
    onSubmit?: (fields: BillingInformationUpdateFormInputValues) => BillingInformationUpdateFormInputValues;
    onSuccess?: (fields: BillingInformationUpdateFormInputValues) => void;
    onError?: (fields: BillingInformationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BillingInformationUpdateFormInputValues) => BillingInformationUpdateFormInputValues;
    onValidate?: BillingInformationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BillingInformationUpdateForm(props: BillingInformationUpdateFormProps): React.ReactElement;
