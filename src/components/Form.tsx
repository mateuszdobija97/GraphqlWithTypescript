import { Dispatch, SetStateAction, useState } from "react";

import { useCreateDeveloperMutation, useUpdateDeveloperMutation } from '../__generated__/hooks'
import { IsEditWithIdType } from '../types'

type Props = {
    isEditWithId: IsEditWithIdType,
    setIsEditWithId: Dispatch<SetStateAction<IsEditWithIdType>>
}

const Form = ({ isEditWithId: { edit, id }, setIsEditWithId }: Props) => {
  const [createDeveloper] = useCreateDeveloperMutation();
  const [updateDeveloper] = useUpdateDeveloperMutation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmitForm = (e: any) => {
    e.preventDefault();

    if (!firstName || !lastName) return alert("Complete the form!");

    edit && id
      ? updateDeveloper({
          variables: {
              id,
              firstName,
              lastName,
          },
      })
      : createDeveloper({
          variables: {
              firstName,
              lastName,
          },
      });

    window.location.reload();
  };

  const stopEditing = () => {
    setIsEditWithId({ edit: false, id: undefined });
    setFirstName("")
    setLastName("")
  }

  return (
    <form className="app__form" onSubmit={handleSubmitForm}>
      <input
        className="app__input-first-name"
        id="first-name-input"
        onChange={e => setFirstName(e.target.value)}
        placeholder="Enter the firstName..."
        value={firstName}
      />
      <input
        className="app__input-last-name"
        id="last-name-input"
        onChange={e => setLastName(e.target.value)}
        placeholder="Enter the lastName..."
        value={lastName}
      />
      <button 
        className="app__btn-form-submit"
        onClick={() => handleSubmitForm}
        type="submit" 
      >
        {edit ? "Edit" : "Add"}
      </button>
      {edit && (
        <button
          className="app__btn-form-remove"
          onClick={stopEditing}
          type="button">x</button>
      )}
    </form>
  );
};

export default Form;
