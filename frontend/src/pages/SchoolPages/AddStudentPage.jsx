import { useState } from "react";

import { AddMultipleStudents } from "../../components/AddMultipleStudents";
import { AddOneStudent } from "../../components/AddOneStudent";
import { CreationModal } from "../../components/CreationModal";
import { ErrorModal } from "../../components/ErrorModal";

export const AddStudentPage = () => {
  const [creationModal, setCreationModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between bg-gray-100 ml-[15vw] pb-10 pt-6">
        <AddOneStudent
          setCreationModal={setCreationModal}
          setErrorModal={setErrorModal}
          setErrorMessage={setErrorMessage}
        />
        <AddMultipleStudents
          setCreationModal={setCreationModal}
          setErrorModal={setErrorModal}
          setErrorMessage={setErrorMessage}
        />
      </div>

      {creationModal ? (
        <CreationModal setCreationModal={setCreationModal} type={"Student"} />
      ) : null}

      {errorModal ? (
        <ErrorModal setErrorModal={setErrorModal} errorMessage={errorMessage} />
      ) : null}
    </>
  );
};
