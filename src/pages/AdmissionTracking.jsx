export default function AdmissionTracking() {
  return (
    <>
      <div className="bg-gray-100 p-5">
        <h1 className="font-semibold text-xl text-center ">
          Admission Tracking
        </h1>
      </div>
      <main className="p-10 w-full mx-auto">
        <form className="flex flex-wrap items-center justify-center gap-5">
          <label htmlFor="">Admission Tracking No:</label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info w-full max-w-xs"
          />

          <button className="bg-brand rounded-md text-white px-7 py-2.5 border border-brand hover:bg-transparent hover:text-brand transition-all duration-150 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <span>Search</span>
          </button>
        </form>
      </main>
    </>
  );
}
