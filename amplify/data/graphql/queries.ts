/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getImpression = /* GraphQL */ `query GetImpression($videoId: String!) {
  getImpression(videoId: $videoId) {
    createdAt
    impressions
    updatedAt
    videoId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetImpressionQueryVariables,
  APITypes.GetImpressionQuery
>;
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    content
    createdAt
    done
    id
    status
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listImpressions = /* GraphQL */ `query ListImpressions(
  $filter: ModelImpressionFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $videoId: String
) {
  listImpressions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    videoId: $videoId
  ) {
    items {
      createdAt
      impressions
      updatedAt
      videoId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListImpressionsQueryVariables,
  APITypes.ListImpressionsQuery
>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      done
      id
      status
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
