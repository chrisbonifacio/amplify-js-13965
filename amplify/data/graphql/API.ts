/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Impression = {
  __typename: "Impression",
  createdAt: string,
  impressions?: number | null,
  updatedAt: string,
  videoId: string,
};

export type Todo = {
  __typename: "Todo",
  content: string,
  createdAt: string,
  done?: boolean | null,
  id: string,
  status?: TodoStatus | null,
  updatedAt: string,
};

export enum TodoStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}


export type ModelImpressionFilterInput = {
  and?: Array< ModelImpressionFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  impressions?: ModelIntInput | null,
  not?: ModelImpressionFilterInput | null,
  or?: Array< ModelImpressionFilterInput | null > | null,
  updatedAt?: ModelStringInput | null,
  videoId?: ModelStringInput | null,
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

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelImpressionConnection = {
  __typename: "ModelImpressionConnection",
  items:  Array<Impression | null >,
  nextToken?: string | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  done?: ModelBooleanInput | null,
  id?: ModelIDInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  status?: ModelTodoStatusInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelTodoStatusInput = {
  eq?: TodoStatus | null,
  ne?: TodoStatus | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelImpressionConditionInput = {
  and?: Array< ModelImpressionConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  impressions?: ModelIntInput | null,
  not?: ModelImpressionConditionInput | null,
  or?: Array< ModelImpressionConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateImpressionInput = {
  impressions?: number | null,
  videoId: string,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  done?: ModelBooleanInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  status?: ModelTodoStatusInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content: string,
  done?: boolean | null,
  id?: string | null,
  status?: TodoStatus | null,
};

export type DeleteImpressionInput = {
  videoId: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type UpdateImpressionInput = {
  impressions?: number | null,
  videoId: string,
};

export type UpdateTodoInput = {
  content?: string | null,
  done?: boolean | null,
  id: string,
  status?: TodoStatus | null,
};

export type ModelSubscriptionImpressionFilterInput = {
  and?: Array< ModelSubscriptionImpressionFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  impressions?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionImpressionFilterInput | null > | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  videoId?: ModelSubscriptionStringInput | null,
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

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  done?: ModelSubscriptionBooleanInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  status?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type GetImpressionQueryVariables = {
  videoId: string,
};

export type GetImpressionQuery = {
  getImpression?:  {
    __typename: "Impression",
    createdAt: string,
    impressions?: number | null,
    updatedAt: string,
    videoId: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content: string,
    createdAt: string,
    done?: boolean | null,
    id: string,
    status?: TodoStatus | null,
    updatedAt: string,
  } | null,
};

export type ListImpressionsQueryVariables = {
  filter?: ModelImpressionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
  videoId?: string | null,
};

export type ListImpressionsQuery = {
  listImpressions?:  {
    __typename: "ModelImpressionConnection",
    items:  Array< {
      __typename: "Impression",
      createdAt: string,
      impressions?: number | null,
      updatedAt: string,
      videoId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content: string,
      createdAt: string,
      done?: boolean | null,
      id: string,
      status?: TodoStatus | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateImpressionMutationVariables = {
  condition?: ModelImpressionConditionInput | null,
  input: CreateImpressionInput,
};

export type CreateImpressionMutation = {
  createImpression?:  {
    __typename: "Impression",
    createdAt: string,
    impressions?: number | null,
    updatedAt: string,
    videoId: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content: string,
    createdAt: string,
    done?: boolean | null,
    id: string,
    status?: TodoStatus | null,
    updatedAt: string,
  } | null,
};

export type DeleteImpressionMutationVariables = {
  condition?: ModelImpressionConditionInput | null,
  input: DeleteImpressionInput,
};

export type DeleteImpressionMutation = {
  deleteImpression?:  {
    __typename: "Impression",
    createdAt: string,
    impressions?: number | null,
    updatedAt: string,
    videoId: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content: string,
    createdAt: string,
    done?: boolean | null,
    id: string,
    status?: TodoStatus | null,
    updatedAt: string,
  } | null,
};

export type IncreaseImpressionMutationVariables = {
  count?: number | null,
  videoId?: string | null,
};

export type IncreaseImpressionMutation = {
  increaseImpression?:  {
    __typename: "Impression",
    createdAt: string,
    impressions?: number | null,
    updatedAt: string,
    videoId: string,
  } | null,
};

export type UpdateImpressionMutationVariables = {
  condition?: ModelImpressionConditionInput | null,
  input: UpdateImpressionInput,
};

export type UpdateImpressionMutation = {
  updateImpression?:  {
    __typename: "Impression",
    createdAt: string,
    impressions?: number | null,
    updatedAt: string,
    videoId: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content: string,
    createdAt: string,
    done?: boolean | null,
    id: string,
    status?: TodoStatus | null,
    updatedAt: string,
  } | null,
};

export type OnCreateImpressionSubscriptionVariables = {
  filter?: ModelSubscriptionImpressionFilterInput | null,
};

export type OnCreateImpressionSubscription = {
  onCreateImpression?:  {
    __typename: "Impression",
    createdAt: string,
    impressions?: number | null,
    updatedAt: string,
    videoId: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content: string,
    createdAt: string,
    done?: boolean | null,
    id: string,
    status?: TodoStatus | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteImpressionSubscriptionVariables = {
  filter?: ModelSubscriptionImpressionFilterInput | null,
};

export type OnDeleteImpressionSubscription = {
  onDeleteImpression?:  {
    __typename: "Impression",
    createdAt: string,
    impressions?: number | null,
    updatedAt: string,
    videoId: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content: string,
    createdAt: string,
    done?: boolean | null,
    id: string,
    status?: TodoStatus | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateImpressionSubscriptionVariables = {
  filter?: ModelSubscriptionImpressionFilterInput | null,
};

export type OnUpdateImpressionSubscription = {
  onUpdateImpression?:  {
    __typename: "Impression",
    createdAt: string,
    impressions?: number | null,
    updatedAt: string,
    videoId: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content: string,
    createdAt: string,
    done?: boolean | null,
    id: string,
    status?: TodoStatus | null,
    updatedAt: string,
  } | null,
};
