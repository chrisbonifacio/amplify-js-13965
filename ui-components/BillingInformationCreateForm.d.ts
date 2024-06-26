import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type BillingInformationCreateFormInputValues = {
    identityCard?: string;
    companyName?: string;
    address?: string;
    city?: string;
    municipality?: string;
    owner?: string;
};
export declare type BillingInformationCreateFormValidationValues = {
    identityCard?: ValidationFunction<string>;
    companyName?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    city?: ValidationFunction<string>;
    municipality?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BillingInformationCreateFormOverridesProps = {
    BillingInformationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    identityCard?: PrimitiveOverrideProps<TextFieldProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    city?: PrimitiveOverrideProps<TextFieldProps>;
    municipality?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BillingInformationCreateFormProps = React.PropsWithChildren<{
    overrides?: BillingInformationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BillingInformationCreateFormInputValues) => BillingInformationCreateFormInputValues;
    onSuccess?: (fields: BillingInformationCreateFormInputValues) => void;
    onError?: (fields: BillingInformationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BillingInformationCreateFormInputValues) => BillingInformationCreateFormInputValues;
    onValidate?: BillingInformationCreateFormValidationValues;
} & React.CSSProperties>;
export default function BillingInformationCreateForm(props: BillingInformationCreateFormProps): React.ReactElement;
