/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type BillingInformation = {
  __typename: "BillingInformation",
  address?: string | null,
  city?: string | null,
  companyName?: string | null,
  createdAt: string,
  customer?: Customer | null,
  customerId?: string | null,
  id: string,
  identityCard?: string | null,
  municipality?: string | null,
  owner?: string | null,
  updatedAt: string,
};

export type Customer = {
  __typename: "Customer",
  billingInformation?: BillingInformation | null,
  createdAt: string,
  email?: string | null,
  fullName?: string | null,
  id: string,
  owner?: string | null,
  phone?: string | null,
  updatedAt: string,
};

export type ModelBillingInformationFilterInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelBillingInformationFilterInput | null > | null,
  city?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  identityCard?: ModelStringInput | null,
  municipality?: ModelStringInput | null,
  not?: ModelBillingInformationFilterInput | null,
  or?: Array< ModelBillingInformationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelBillingInformationConnection = {
  __typename: "ModelBillingInformationConnection",
  items:  Array<BillingInformation | null >,
  nextToken?: string | null,
};

export type ModelCustomerFilterInput = {
  and?: Array< ModelCustomerFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelCustomerFilterInput | null,
  or?: Array< ModelCustomerFilterInput | null > | null,
  owner?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelCustomerConnection = {
  __typename: "ModelCustomerConnection",
  items:  Array<Customer | null >,
  nextToken?: string | null,
};

export type ModelBillingInformationConditionInput = {
  address?: ModelStringInput | null,
  and?: Array< ModelBillingInformationConditionInput | null > | null,
  city?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  customerId?: ModelIDInput | null,
  identityCard?: ModelStringInput | null,
  municipality?: ModelStringInput | null,
  not?: ModelBillingInformationConditionInput | null,
  or?: Array< ModelBillingInformationConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateBillingInformationInput = {
  address?: string | null,
  city?: string | null,
  companyName?: string | null,
  customerId?: string | null,
  id?: string | null,
  identityCard?: string | null,
  municipality?: string | null,
  owner?: string | null,
};

export type ModelCustomerConditionInput = {
  and?: Array< ModelCustomerConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  fullName?: ModelStringInput | null,
  not?: ModelCustomerConditionInput | null,
  or?: Array< ModelCustomerConditionInput | null > | null,
  owner?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateCustomerInput = {
  email?: string | null,
  fullName?: string | null,
  id?: string | null,
  owner?: string | null,
  phone?: string | null,
};

export type DeleteBillingInformationInput = {
  id: string,
};

export type DeleteCustomerInput = {
  id: string,
};

export type UpdateBillingInformationInput = {
  address?: string | null,
  city?: string | null,
  companyName?: string | null,
  customerId?: string | null,
  id: string,
  identityCard?: string | null,
  municipality?: string | null,
  owner?: string | null,
};

export type UpdateCustomerInput = {
  email?: string | null,
  fullName?: string | null,
  id: string,
  owner?: string | null,
  phone?: string | null,
};

export type ModelSubscriptionBillingInformationFilterInput = {
  address?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBillingInformationFilterInput | null > | null,
  city?: ModelSubscriptionStringInput | null,
  companyName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  customerId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  identityCard?: ModelSubscriptionStringInput | null,
  municipality?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionBillingInformationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCustomerFilterInput = {
  and?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  fullName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionCustomerFilterInput | null > | null,
  owner?: ModelStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetBillingInformationQueryVariables = {
  id: string,
};

export type GetBillingInformationQuery = {
  getBillingInformation?:  {
    __typename: "BillingInformation",
    address?: string | null,
    city?: string | null,
    companyName?: string | null,
    createdAt: string,
    customerId?: string | null,
    id: string,
    identityCard?: string | null,
    municipality?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetCustomerQueryVariables = {
  id: string,
};

export type GetCustomerQuery = {
  getCustomer?:  {
    __typename: "Customer",
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    phone?: string | null,
    updatedAt: string,
  } | null,
};

export type ListBillingInformationsQueryVariables = {
  filter?: ModelBillingInformationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBillingInformationsQuery = {
  listBillingInformations?:  {
    __typename: "ModelBillingInformationConnection",
    nextToken?: string | null,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomerConnection",
    nextToken?: string | null,
  } | null,
};

export type CreateBillingInformationMutationVariables = {
  condition?: ModelBillingInformationConditionInput | null,
  input: CreateBillingInformationInput,
};

export type CreateBillingInformationMutation = {
  createBillingInformation?:  {
    __typename: "BillingInformation",
    address?: string | null,
    city?: string | null,
    companyName?: string | null,
    createdAt: string,
    customerId?: string | null,
    id: string,
    identityCard?: string | null,
    municipality?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateCustomerMutationVariables = {
  condition?: ModelCustomerConditionInput | null,
  input: CreateCustomerInput,
};

export type CreateCustomerMutation = {
  createCustomer?:  {
    __typename: "Customer",
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    phone?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteBillingInformationMutationVariables = {
  condition?: ModelBillingInformationConditionInput | null,
  input: DeleteBillingInformationInput,
};

export type DeleteBillingInformationMutation = {
  deleteBillingInformation?:  {
    __typename: "BillingInformation",
    address?: string | null,
    city?: string | null,
    companyName?: string | null,
    createdAt: string,
    customerId?: string | null,
    id: string,
    identityCard?: string | null,
    municipality?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteCustomerMutationVariables = {
  condition?: ModelCustomerConditionInput | null,
  input: DeleteCustomerInput,
};

export type DeleteCustomerMutation = {
  deleteCustomer?:  {
    __typename: "Customer",
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    phone?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateBillingInformationMutationVariables = {
  condition?: ModelBillingInformationConditionInput | null,
  input: UpdateBillingInformationInput,
};

export type UpdateBillingInformationMutation = {
  updateBillingInformation?:  {
    __typename: "BillingInformation",
    address?: string | null,
    city?: string | null,
    companyName?: string | null,
    createdAt: string,
    customerId?: string | null,
    id: string,
    identityCard?: string | null,
    municipality?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateCustomerMutationVariables = {
  condition?: ModelCustomerConditionInput | null,
  input: UpdateCustomerInput,
};

export type UpdateCustomerMutation = {
  updateCustomer?:  {
    __typename: "Customer",
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    phone?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateBillingInformationSubscriptionVariables = {
  filter?: ModelSubscriptionBillingInformationFilterInput | null,
  owner?: string | null,
};

export type OnCreateBillingInformationSubscription = {
  onCreateBillingInformation?:  {
    __typename: "BillingInformation",
    address?: string | null,
    city?: string | null,
    companyName?: string | null,
    createdAt: string,
    customerId?: string | null,
    id: string,
    identityCard?: string | null,
    municipality?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
  owner?: string | null,
};

export type OnCreateCustomerSubscription = {
  onCreateCustomer?:  {
    __typename: "Customer",
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    phone?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteBillingInformationSubscriptionVariables = {
  filter?: ModelSubscriptionBillingInformationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteBillingInformationSubscription = {
  onDeleteBillingInformation?:  {
    __typename: "BillingInformation",
    address?: string | null,
    city?: string | null,
    companyName?: string | null,
    createdAt: string,
    customerId?: string | null,
    id: string,
    identityCard?: string | null,
    municipality?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
  owner?: string | null,
};

export type OnDeleteCustomerSubscription = {
  onDeleteCustomer?:  {
    __typename: "Customer",
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    phone?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateBillingInformationSubscriptionVariables = {
  filter?: ModelSubscriptionBillingInformationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateBillingInformationSubscription = {
  onUpdateBillingInformation?:  {
    __typename: "BillingInformation",
    address?: string | null,
    city?: string | null,
    companyName?: string | null,
    createdAt: string,
    customerId?: string | null,
    id: string,
    identityCard?: string | null,
    municipality?: string | null,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateCustomerSubscriptionVariables = {
  filter?: ModelSubscriptionCustomerFilterInput | null,
  owner?: string | null,
};

export type OnUpdateCustomerSubscription = {
  onUpdateCustomer?:  {
    __typename: "Customer",
    createdAt: string,
    email?: string | null,
    fullName?: string | null,
    id: string,
    owner?: string | null,
    phone?: string | null,
    updatedAt: string,
  } | null,
};
