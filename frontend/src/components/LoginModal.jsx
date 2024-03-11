export const LoginModal = ({ setLoginModal }) => {
  return (
    <div>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Status</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setLoginModal(false)}
              >
                <span className="bg-transparent text-slate-600 h-6 w-6 text-2xl block outline-none focus:outline-none hover:text-black">
                  ×
                </span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <p className="font-semibold text-xl">
                The email or password does not match. Please try again.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};
