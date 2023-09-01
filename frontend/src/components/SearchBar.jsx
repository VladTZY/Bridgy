export const SearchBar = () => {
  return (
    <div className="h-[6vh]">
      <input
        className="m-5  border-2 h-full rounded-full w-[35vw] bg-inherit px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
        placeholder="Search here..."
      />
    </div>
  );
};
