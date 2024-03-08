import axios from "axios";

export const MarkAttendanceModal = ({
  setAttendanceModal,
  students,
  setStudents,
  eventId,
}) => {
  const handleChange = (index, userId) => {
    axios
      .post(
        `${
          import.meta.env.VITE_API_URL
        }/organization/check_student?userId=${userId}&eventId=${eventId}`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        const newArray = students.map((student, indexNow) => {
          if (indexNow != index) return student;

          if (student.status == "JOINED") student.status = "MARKED";
          else student.status = "JOINED";

          return student;
        });

        setStudents(newArray);
      });
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-2xl font-semibold">Mark Attendance</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setAttendanceModal(false)}
              >
                <span className="text-slate-600 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <p className="my-4 text-slate-500 text-lg leading-relaxed">
                Check the persons who showed up
              </p>
              <>
                {students.map((student, index) => {
                  return (
                    <div key={index} className="flex justify-between">
                      <h1>{student.user.username}</h1>
                      <input
                        type="checkbox"
                        defaultChecked={student.status == "MARKED"}
                        onChange={(e) => handleChange(index, student.user.id)}
                      />
                    </div>
                  );
                })}
              </>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="hover:text-white hover:bg-red-500 text-red-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setAttendanceModal(false)}
              >
                Close
              </button>
              <button
                className="hover:bg-[#2135D9] bg-[#2EA0FB] text-white active:bg-[#2EA0FB] font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setAttendanceModal(false)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};
