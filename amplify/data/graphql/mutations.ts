/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createImpression = /* GraphQL */ `mutation CreateImpression(
  $condition: ModelImpressionConditionInput
  $input: CreateImpressionInput!
) {
  createImpression(condition: $condition, input: $input) {
    createdAt
    impressions
    updatedAt
    videoId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateImpressionMutationVariables,
  APITypes.CreateImpressionMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
    content
    createdAt
    done
    id
    status
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const deleteImpression = /* GraphQL */ `mutation DeleteImpression(
  $condition: ModelImpressionConditionInput
  $input: DeleteImpressionInput!
) {
  deleteImpression(condition: $condition, input: $input) {
    createdAt
    impressions
    updatedAt
    videoId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteImpressionMutationVariables,
  APITypes.DeleteImpressionMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
    content
    createdAt
    done
    id
    status
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const increaseImpression = /* GraphQL */ `mutation IncreaseImpression($count: Int, $videoId: String) {
  increaseImpression(count: $count, videoId: $videoId) {
    createdAt
    impressions
    updatedAt
    videoId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.IncreaseImpressionMutationVariables,
  APITypes.IncreaseImpressionMutation
>;
export const updateImpression = /* GraphQL */ `mutation UpdateImpression(
  $condition: ModelImpressionConditionInput
  $input: UpdateImpressionInput!
) {
  updateImpression(condition: $condition, input: $input) {
    createdAt
    impressions
    updatedAt
    videoId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateImpressionMutationVariables,
  APITypes.UpdateImpressionMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
    content
    createdAt
    done
    id
    status
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
