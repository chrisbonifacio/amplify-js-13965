/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateImpression =
  /* GraphQL */ `subscription OnCreateImpression(
  $filter: ModelSubscriptionImpressionFilterInput
) {
  onCreateImpression(filter: $filter) {
    createdAt
    impressions
    updatedAt
    videoId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateImpressionSubscriptionVariables,
    APITypes.OnCreateImpressionSubscription
  >;
export const onCreateTodo =
  /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    content
    createdAt
    done
    id
    status
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnCreateTodoSubscriptionVariables,
    APITypes.OnCreateTodoSubscription
  >;
export const onDeleteImpression =
  /* GraphQL */ `subscription OnDeleteImpression(
  $filter: ModelSubscriptionImpressionFilterInput
) {
  onDeleteImpression(filter: $filter) {
    createdAt
    impressions
    updatedAt
    videoId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteImpressionSubscriptionVariables,
    APITypes.OnDeleteImpressionSubscription
  >;
export const onDeleteTodo =
  /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    content
    createdAt
    done
    id
    status
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnDeleteTodoSubscriptionVariables,
    APITypes.OnDeleteTodoSubscription
  >;
export const onUpdateImpression =
  /* GraphQL */ `subscription OnUpdateImpression(
  $filter: ModelSubscriptionImpressionFilterInput
) {
  onUpdateImpression(filter: $filter) {
    createdAt
    impressions
    updatedAt
    videoId
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateImpressionSubscriptionVariables,
    APITypes.OnUpdateImpressionSubscription
  >;
export const onUpdateTodo =
  /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    content
    createdAt
    done
    id
    status
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
    APITypes.OnUpdateTodoSubscriptionVariables,
    APITypes.OnUpdateTodoSubscription
  >;
