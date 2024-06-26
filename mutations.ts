/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBillingInformation = /* GraphQL */ `mutation CreateBillingInformation(
  $condition: ModelBillingInformationConditionInput
  $input: CreateBillingInformationInput!
) {
  createBillingInformation(condition: $condition, input: $input) {
    address
    city
    companyName
    createdAt
    customerId
    id
    identityCard
    municipality
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBillingInformationMutationVariables,
  APITypes.CreateBillingInformationMutation
>;
export const createCustomer = /* GraphQL */ `mutation CreateCustomer(
  $condition: ModelCustomerConditionInput
  $input: CreateCustomerInput!
) {
  createCustomer(condition: $condition, input: $input) {
    createdAt
    email
    fullName
    id
    owner
    phone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCustomerMutationVariables,
  APITypes.CreateCustomerMutation
>;
export const deleteBillingInformation = /* GraphQL */ `mutation DeleteBillingInformation(
  $condition: ModelBillingInformationConditionInput
  $input: DeleteBillingInformationInput!
) {
  deleteBillingInformation(condition: $condition, input: $input) {
    address
    city
    companyName
    createdAt
    customerId
    id
    identityCard
    municipality
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBillingInformationMutationVariables,
  APITypes.DeleteBillingInformationMutation
>;
export const deleteCustomer = /* GraphQL */ `mutation DeleteCustomer(
  $condition: ModelCustomerConditionInput
  $input: DeleteCustomerInput!
) {
  deleteCustomer(condition: $condition, input: $input) {
    createdAt
    email
    fullName
    id
    owner
    phone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCustomerMutationVariables,
  APITypes.DeleteCustomerMutation
>;
export const updateBillingInformation = /* GraphQL */ `mutation UpdateBillingInformation(
  $condition: ModelBillingInformationConditionInput
  $input: UpdateBillingInformationInput!
) {
  updateBillingInformation(condition: $condition, input: $input) {
    address
    city
    companyName
    createdAt
    customerId
    id
    identityCard
    municipality
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBillingInformationMutationVariables,
  APITypes.UpdateBillingInformationMutation
>;
export const updateCustomer = /* GraphQL */ `mutation UpdateCustomer(
  $condition: ModelCustomerConditionInput
  $input: UpdateCustomerInput!
) {
  updateCustomer(condition: $condition, input: $input) {
    createdAt
    email
    fullName
    id
    owner
    phone
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCustomerMutationVariables,
  APITypes.UpdateCustomerMutation
>;
