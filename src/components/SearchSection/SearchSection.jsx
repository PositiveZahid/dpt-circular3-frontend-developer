const SearchSection = () => {
  return (
    <div className="py-3 border-b border-primaryColor flex justify-between">
      <div className="inline-flex items-center">
        <label
          className="relative flex items-center  rounded-full cursor-pointer"
          htmlFor="check"
        >
          <input
            type="checkbox"
            className="before:content[''] peer  relative h-4 w-4 cursor-pointer appearance-none  border border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-primaryColor checked:bg-primaryColor checked:before:bg-primaryColor hover:before:opacity-10"
            id="check"
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <label
          className="mt-px px-2 font-bold capitalize cursor-pointer select-none"
          htmlFor="check"
        >
          extra options
        </label>
      </div>
      <div className="flex gap-2 items-center">
        <p className="font-bold">Environment</p>
        <div className="flex items-center gap-2">
          <input className="w-4 h-4" type="radio" name="" id="dummy" />
          <label className="font-bold" htmlFor="dummy">
            Dummy
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input className="w-4 h-4" type="radio" name="" id="pdt" />
          <label className="font-bold" htmlFor="pdt">
            PDT
          </label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="text-xs font-bold rounded-[4px] uppercase bg-secondaryColor text-white py-2 px-6"
        >
          search
        </button>
      </div>
    </div>
  );
};

export default SearchSection;
