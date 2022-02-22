import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Developer = {
  __typename?: 'Developer';
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createDeveloper?: Maybe<Scalars['String']>;
  removeDeveloper?: Maybe<Scalars['String']>;
  updateDeveloper?: Maybe<Scalars['String']>;
};


export type MutationCreateDeveloperArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationRemoveDeveloperArgs = {
  id: Scalars['String'];
};


export type MutationUpdateDeveloperArgs = {
  firstName: Scalars['String'];
  id: Scalars['String'];
  lastName: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  developers: Array<Maybe<Developer>>;
};

export type DevelopersQueryVariables = Exact<{ [key: string]: never; }>;


export type DevelopersQuery = { __typename?: 'Query', developers: Array<{ __typename?: 'Developer', id?: string | null, firstName?: string | null, lastName?: string | null } | null> };


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
export function useDevelopersQuery(baseOptions?: Apollo.QueryHookOptions<DevelopersQuery, DevelopersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DevelopersQuery, DevelopersQueryVariables>(DevelopersDocument, options);
      }
export function useDevelopersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DevelopersQuery, DevelopersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DevelopersQuery, DevelopersQueryVariables>(DevelopersDocument, options);
        }
export type DevelopersQueryHookResult = ReturnType<typeof useDevelopersQuery>;
export type DevelopersLazyQueryHookResult = ReturnType<typeof useDevelopersLazyQuery>;
export type DevelopersQueryResult = Apollo.QueryResult<DevelopersQuery, DevelopersQueryVariables>;