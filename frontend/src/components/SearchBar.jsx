export const SearchBar = () => {
  return (
    <form>
      <div className=" flex relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          placeholder="Search here..."
          className="block w-[50%] md:w-[15%] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50"
        />
        <button
          type="submit"
          className="text-white absolute right-2.5 rounded-full bg-[#2EA0FB] hover:bg-[#2135D9]  font-medium text-sm px-6  py-2 "
        >
          Search
        </button>
      </div>
    </form>
  );
};
