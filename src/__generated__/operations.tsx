import * as Types from './types';

export type CreateDeveloperMutationVariables = Types.Exact<{
  firstName: Types.Scalars['String'];
  lastName: Types.Scalars['String'];
}>;


export type CreateDeveloperMutation = (
  { __typename?: 'Mutation' }
  & Pick<Types.Mutation, 'createDeveloper'>
);

export type DevelopersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type DevelopersQuery = (
  { __typename?: 'Query' }
  & { developers: Array<(
    { __typename?: 'Developer' }
    & Pick<Types.Developer, 'id' | 'firstName' | 'lastName'>
  )> }
);

export type RemoveDeveloperMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type RemoveDeveloperMutation = (
  { __typename?: 'Mutation' }
  & Pick<Types.Mutation, 'removeDeveloper'>
);

export type UpdateDeveloperMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  firstName: Types.Scalars['String'];
  lastName: Types.Scalars['String'];
}>;


export type UpdateDeveloperMutation = (
  { __typename?: 'Mutation' }
  & Pick<Types.Mutation, 'updateDeveloper'>
);
