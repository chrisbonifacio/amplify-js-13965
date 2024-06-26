/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBillingInformation = /* GraphQL */ `subscription OnCreateBillingInformation(
  $filter: ModelSubscriptionBillingInformationFilterInput
  $owner: String
) {
  onCreateBillingInformation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBillingInformationSubscriptionVariables,
  APITypes.OnCreateBillingInformationSubscription
>;
export const onCreateCustomer = /* GraphQL */ `subscription OnCreateCustomer(
  $filter: ModelSubscriptionCustomerFilterInput
  $owner: String
) {
  onCreateCustomer(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCustomerSubscriptionVariables,
  APITypes.OnCreateCustomerSubscription
>;
export const onDeleteBillingInformation = /* GraphQL */ `subscription OnDeleteBillingInformation(
  $filter: ModelSubscriptionBillingInformationFilterInput
  $owner: String
) {
  onDeleteBillingInformation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBillingInformationSubscriptionVariables,
  APITypes.OnDeleteBillingInformationSubscription
>;
export const onDeleteCustomer = /* GraphQL */ `subscription OnDeleteCustomer(
  $filter: ModelSubscriptionCustomerFilterInput
  $owner: String
) {
  onDeleteCustomer(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCustomerSubscriptionVariables,
  APITypes.OnDeleteCustomerSubscription
>;
export const onUpdateBillingInformation = /* GraphQL */ `subscription OnUpdateBillingInformation(
  $filter: ModelSubscriptionBillingInformationFilterInput
  $owner: String
) {
  onUpdateBillingInformation(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBillingInformationSubscriptionVariables,
  APITypes.OnUpdateBillingInformationSubscription
>;
export const onUpdateCustomer = /* GraphQL */ `subscription OnUpdateCustomer(
  $filter: ModelSubscriptionCustomerFilterInput
  $owner: String
) {
  onUpdateCustomer(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCustomerSubscriptionVariables,
  APITypes.OnUpdateCustomerSubscription
>;
