/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBillingInformation = /* GraphQL */ `query GetBillingInformation($id: ID!) {
  getBillingInformation(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetBillingInformationQueryVariables,
  APITypes.GetBillingInformationQuery
>;
export const getCustomer = /* GraphQL */ `query GetCustomer($id: ID!) {
  getCustomer(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetCustomerQueryVariables,
  APITypes.GetCustomerQuery
>;
export const listBillingInformations = /* GraphQL */ `query ListBillingInformations(
  $filter: ModelBillingInformationFilterInput
  $limit: Int
  $nextToken: String
) {
  listBillingInformations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBillingInformationsQueryVariables,
  APITypes.ListBillingInformationsQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $filter: ModelCustomerFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
