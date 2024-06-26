/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getBillingInformation } from "./graphql/queries";
import { updateBillingInformation } from "./graphql/mutations";
const client = generateClient();
export default function BillingInformationUpdateForm(props) {
  const {
    id: idProp,
    billingInformation: billingInformationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    identityCard: "",
    companyName: "",
    address: "",
    city: "",
    municipality: "",
    owner: "",
  };
  const [identityCard, setIdentityCard] = React.useState(
    initialValues.identityCard
  );
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [city, setCity] = React.useState(initialValues.city);
  const [municipality, setMunicipality] = React.useState(
    initialValues.municipality
  );
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = billingInformationRecord
      ? { ...initialValues, ...billingInformationRecord }
      : initialValues;
    setIdentityCard(cleanValues.identityCard);
    setCompanyName(cleanValues.companyName);
    setAddress(cleanValues.address);
    setCity(cleanValues.city);
    setMunicipality(cleanValues.municipality);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [billingInformationRecord, setBillingInformationRecord] =
    React.useState(billingInformationModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getBillingInformation.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getBillingInformation
        : billingInformationModelProp;
      setBillingInformationRecord(record);
    };
    queryData();
  }, [idProp, billingInformationModelProp]);
  React.useEffect(resetStateValues, [billingInformationRecord]);
  const validations = {
    identityCard: [],
    companyName: [],
    address: [],
    city: [],
    municipality: [],
    owner: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          identityCard: identityCard ?? null,
          companyName: companyName ?? null,
          address: address ?? null,
          city: city ?? null,
          municipality: municipality ?? null,
          owner: owner ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateBillingInformation.replaceAll("__typename", ""),
            variables: {
              input: {
                id: billingInformationRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "BillingInformationUpdateForm")}
      {...rest}
    >
      <TextField
        label="Identity card"
        isRequired={false}
        isReadOnly={false}
        value={identityCard}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              identityCard: value,
              companyName,
              address,
              city,
              municipality,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.identityCard ?? value;
          }
          if (errors.identityCard?.hasError) {
            runValidationTasks("identityCard", value);
          }
          setIdentityCard(value);
        }}
        onBlur={() => runValidationTasks("identityCard", identityCard)}
        errorMessage={errors.identityCard?.errorMessage}
        hasError={errors.identityCard?.hasError}
        {...getOverrideProps(overrides, "identityCard")}
      ></TextField>
      <TextField
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              identityCard,
              companyName: value,
              address,
              city,
              municipality,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.companyName ?? value;
          }
          if (errors.companyName?.hasError) {
            runValidationTasks("companyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("companyName", companyName)}
        errorMessage={errors.companyName?.errorMessage}
        hasError={errors.companyName?.hasError}
        {...getOverrideProps(overrides, "companyName")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              identityCard,
              companyName,
              address: value,
              city,
              municipality,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="City"
        isRequired={false}
        isReadOnly={false}
        value={city}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              identityCard,
              companyName,
              address,
              city: value,
              municipality,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.city ?? value;
          }
          if (errors.city?.hasError) {
            runValidationTasks("city", value);
          }
          setCity(value);
        }}
        onBlur={() => runValidationTasks("city", city)}
        errorMessage={errors.city?.errorMessage}
        hasError={errors.city?.hasError}
        {...getOverrideProps(overrides, "city")}
      ></TextField>
      <TextField
        label="Municipality"
        isRequired={false}
        isReadOnly={false}
        value={municipality}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              identityCard,
              companyName,
              address,
              city,
              municipality: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.municipality ?? value;
          }
          if (errors.municipality?.hasError) {
            runValidationTasks("municipality", value);
          }
          setMunicipality(value);
        }}
        onBlur={() => runValidationTasks("municipality", municipality)}
        errorMessage={errors.municipality?.errorMessage}
        hasError={errors.municipality?.hasError}
        {...getOverrideProps(overrides, "municipality")}
      ></TextField>
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              identityCard,
              companyName,
              address,
              city,
              municipality,
              owner: value,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || billingInformationModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || billingInformationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
