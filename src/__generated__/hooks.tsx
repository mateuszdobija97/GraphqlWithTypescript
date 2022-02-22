import * as Types from './operations';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

export const CreateDeveloperDocument = gql`
    mutation CreateDeveloper($firstName: String!, $lastName: String!) {
  createDeveloper(firstName: $firstName, lastName: $lastName)
}
    `;
export type CreateDeveloperMutationFn = Apollo.MutationFunction<Types.CreateDeveloperMutation, Types.CreateDeveloperMutationVariables>;

/**
 * __useCreateDeveloperMutation__
 *
 * To run a mutation, you first call `useCreateDeveloperMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDeveloperMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDeveloperMutation, { data, loading, error }] = useCreateDeveloperMutation({
 *   variables: {
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useCreateDeveloperMutation(baseOptions?: Apollo.MutationHookOptions<Types.CreateDeveloperMutation, Types.CreateDeveloperMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.CreateDeveloperMutation, Types.CreateDeveloperMutationVariables>(CreateDeveloperDocument, options);
      }
export type CreateDeveloperMutationHookResult = ReturnType<typeof useCreateDeveloperMutation>;
export type CreateDeveloperMutationResult = Apollo.MutationResult<Types.CreateDeveloperMutation>;
export type CreateDeveloperMutationOptions = Apollo.BaseMutationOptions<Types.CreateDeveloperMutation, Types.CreateDeveloperMutationVariables>;
export const DevelopersDocument = gql`
    query developers {
  developers {
    id
    firstName
    lastName
  }
}
    `;

/**
 * __useDevelopersQuery__
 *
 * To run a query within a React component, call `useDevelopersQuery` and pass it any options that fit your needs.
 * When your component renders, `useDevelopersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDevelopersQuery({
 *   variables: {
 *   },
 * });
 */
export function useDevelopersQuery(baseOptions?: Apollo.QueryHookOptions<Types.DevelopersQuery, Types.DevelopersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<Types.DevelopersQuery, Types.DevelopersQueryVariables>(DevelopersDocument, options);
      }
export function useDevelopersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Types.DevelopersQuery, Types.DevelopersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<Types.DevelopersQuery, Types.DevelopersQueryVariables>(DevelopersDocument, options);
        }
export type DevelopersQueryHookResult = ReturnType<typeof useDevelopersQuery>;
export type DevelopersLazyQueryHookResult = ReturnType<typeof useDevelopersLazyQuery>;
export type DevelopersQueryResult = Apollo.QueryResult<Types.DevelopersQuery, Types.DevelopersQueryVariables>;
export const RemoveDeveloperDocument = gql`
    mutation RemoveDeveloper($id: String!) {
  removeDeveloper(id: $id)
}
    `;
export type RemoveDeveloperMutationFn = Apollo.MutationFunction<Types.RemoveDeveloperMutation, Types.RemoveDeveloperMutationVariables>;

/**
 * __useRemoveDeveloperMutation__
 *
 * To run a mutation, you first call `useRemoveDeveloperMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDeveloperMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDeveloperMutation, { data, loading, error }] = useRemoveDeveloperMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveDeveloperMutation(baseOptions?: Apollo.MutationHookOptions<Types.RemoveDeveloperMutation, Types.RemoveDeveloperMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.RemoveDeveloperMutation, Types.RemoveDeveloperMutationVariables>(RemoveDeveloperDocument, options);
      }
export type RemoveDeveloperMutationHookResult = ReturnType<typeof useRemoveDeveloperMutation>;
export type RemoveDeveloperMutationResult = Apollo.MutationResult<Types.RemoveDeveloperMutation>;
export type RemoveDeveloperMutationOptions = Apollo.BaseMutationOptions<Types.RemoveDeveloperMutation, Types.RemoveDeveloperMutationVariables>;
export const UpdateDeveloperDocument = gql`
    mutation UpdateDeveloper($id: String!, $firstName: String!, $lastName: String!) {
  updateDeveloper(id: $id, firstName: $firstName, lastName: $lastName)
}
    `;
export type UpdateDeveloperMutationFn = Apollo.MutationFunction<Types.UpdateDeveloperMutation, Types.UpdateDeveloperMutationVariables>;

/**
 * __useUpdateDeveloperMutation__
 *
 * To run a mutation, you first call `useUpdateDeveloperMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDeveloperMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDeveloperMutation, { data, loading, error }] = useUpdateDeveloperMutation({
 *   variables: {
 *      id: // value for 'id'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *   },
 * });
 */
export function useUpdateDeveloperMutation(baseOptions?: Apollo.MutationHookOptions<Types.UpdateDeveloperMutation, Types.UpdateDeveloperMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Types.UpdateDeveloperMutation, Types.UpdateDeveloperMutationVariables>(UpdateDeveloperDocument, options);
      }
export type UpdateDeveloperMutationHookResult = ReturnType<typeof useUpdateDeveloperMutation>;
export type UpdateDeveloperMutationResult = Apollo.MutationResult<Types.UpdateDeveloperMutation>;
export type UpdateDeveloperMutationOptions = Apollo.BaseMutationOptions<Types.UpdateDeveloperMutation, Types.UpdateDeveloperMutationVariables>;