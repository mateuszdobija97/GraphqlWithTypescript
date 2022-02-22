import { useState } from "react";

import {
  DeveloperList,
  Error,
  Form,
  Header,
  Loader,
  NotFound,
} from './components'

import { useDevelopersQuery } from './__generated__/hooks'
import { IsEditWithIdType } from './types'

const App = () => {
  const [isEditWithId, setIsEditWithId] = useState<IsEditWithIdType>({ edit: false, id: undefined });
  const { data, loading, error } = useDevelopersQuery();

  if (loading) return <Loader />;
  if (error) return <Error />;
  if (!data) return <NotFound />;

  return (
    <div className="app">
      <Header header="CRUD - using GraphQL" />
      <Form
        isEditWithId={isEditWithId}
        setIsEditWithId={setIsEditWithId}
      />
      <DeveloperList
        developers={data.developers}
        setIsEditWithId={setIsEditWithId}
      />
    </div>
  );
};

export default App;
