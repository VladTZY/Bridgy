export const StudentStatsCard = (statName, update, total) => {
  return (
    <div className="p-6 bg-white shadow rounded-2xl">
      <dl className="space-y-2">
        <dt className="text-sm font-medium text-gray-500 2xl:text-xl">
          Total {statName}
        </dt>

        <dd className="text-5xl font-light md:text-6xl">{total}</dd>

        <dd className="flex items-center space-x-1 text-sm font-medium text-green-500">
          <span>{update}</span>

          <svg
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17.25 15.25V6.75H8.75"
            ></path>
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M17 7L6.75 17.25"
            ></path>
          </svg>
        </dd>
      </dl>
    </div>
  );
};
