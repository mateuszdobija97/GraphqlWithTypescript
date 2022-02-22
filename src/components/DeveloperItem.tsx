import { Dispatch, SetStateAction } from 'react'

import { useRemoveDeveloperMutation } from '../__generated__/hooks'
import { Developer } from '../__generated__/types'
import { IsEditWithIdType } from '../types'

type Props = {
    developer: Developer,
    setIsEditWithId: Dispatch<SetStateAction<IsEditWithIdType>>,
}

const DeveloperItem = ({ developer: { firstName, id, lastName }, setIsEditWithId }: Props) => {
  const [removeDeveloper] = useRemoveDeveloperMutation()

  const handleRemoveDeveloper = (id: string | undefined) => {
    if(id) {
      removeDeveloper({
        variables: {
          id,
        },
      });
    }

    window.location.reload();
  };

  const handleUpdateDeveloper = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string | undefined) => {
    e.preventDefault();
    if(id) setIsEditWithId({ edit: true, id });
    document.getElementById("first-name-input")?.focus();
  };
    
    return (
        <li className="app__developer-item">
          <p className="app__developer-first-name">
            First name: 
            <span className="app__developer-span"> {firstName}</span>
          </p>
          <p className="app__developer-last-name">
            Last name: 
            <span className="app__developer-span"> {lastName}</span>
          </p>
          <button
            className="app__developer-btn-edit"
            onClick={(e) => handleUpdateDeveloper(e, id)}
            type="button"
          >
            Edit
          </button>
          <button
            className="app__developer-btn-remove"
            onClick={() => handleRemoveDeveloper(id)}
            type="button"
          >
            Remove
          </button>
        </li>
      );
}

export default DeveloperItem