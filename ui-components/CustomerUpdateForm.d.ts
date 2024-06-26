import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Customer } from "./graphql/types";
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
export declare type CustomerUpdateFormInputValues = {
    fullName?: string;
    email?: string;
    phone?: string;
    owner?: string;
};
export declare type CustomerUpdateFormValidationValues = {
    fullName?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CustomerUpdateFormOverridesProps = {
    CustomerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    fullName?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CustomerUpdateFormProps = React.PropsWithChildren<{
    overrides?: CustomerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    customer?: Customer;
    onSubmit?: (fields: CustomerUpdateFormInputValues) => CustomerUpdateFormInputValues;
    onSuccess?: (fields: CustomerUpdateFormInputValues) => void;
    onError?: (fields: CustomerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CustomerUpdateFormInputValues) => CustomerUpdateFormInputValues;
    onValidate?: CustomerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CustomerUpdateForm(props: CustomerUpdateFormProps): React.ReactElement;
