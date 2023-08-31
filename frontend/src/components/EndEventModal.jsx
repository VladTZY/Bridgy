import { useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import axios from "axios";

export const EndEventModal = ({ setEndModal, students, eventId }) => {
  const jwt = useSelector((state) => state.auth.jwt);
  const [presentArray, setPresentArray] = useState(
    new Array(students.length).fill(false)
  );

  const handleChange = (index) => {
    const updatedValues = presentArray.map((val, i) => {
      if (i == index) {
        return !val;
      } else return val;
    });

    setPresentArray(updatedValues);
  };

  const EndEvent = async () => {
    const finalArray = presentArray.map((value, index) => {
      if (value)
        return {
          userId: students[index].user.id,
          status: "FINISHED",
        };

      return {
        userId: students[index].user.id,
        status: "MISSING",
      };
    });

    axios
      .post(
        `http://localhost:4004/api/organization/finish_event?eventId=${eventId}`,
        finalArray,
        {
          headers: {
            Authorization: `BEARER ${jwt}`,
          },
        }
      )
      .then(setEndModal(false));
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">End event</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setEndModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                Who participated?
              </p>
              {presentArray.length != 0 && (
                <>
                  {students.map((student, index) => {
                    return (
                      <div key={index} className="flex justify-between">
                        <h1>{student.user.username}</h1>
                        <input
                          type="checkbox"
                          value={presentArray[index]}
                          onChange={(e) => handleChange(index)}
                        />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setEndModal(false)}
              >
                Close
              </button>
              <button
                className="bg-[#2EA0FB] text-white active:bg-[#2EA0FB] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => EndEvent()}
              >
                End event
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
