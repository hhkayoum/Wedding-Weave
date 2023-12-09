const HowToWork = () => {
  return (
    <div>
      <div className="flex justify-center ">
        <h3 className="text-4xl font-semibold text-[#836b6c] text-center mt-20 border-y-2 p-4">
          Getting Started Guide
        </h3>
      </div>
      <ol className="items-center sm:flex max-w-[1200px] mx-auto pt-16 px-2">
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <img
                className="w-[150px]  text-blue-800 dark:text-blue-300 bg-[#D4DBE5] rounded-full text-ce"
                aria-hidden="true"
                src="https://i.ibb.co/hXtbkDs/Security-Guard-Badge-Clipart-PNG-Images-Security-Guard-Logo-Design-Vector-Security-Guard-Logo-PNG-Im.png"
                alt=""
              />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-3xl font-extrabold text-[#836b6c] dark:text-white ">
              Sign Up !!
            </h3>

            <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">
              Design a user-friendly signup form, validate user input, secure
              backend, create user account, and provide feedback for a seamless
              signup experience.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center  bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <img
                className="w-[150px] rounded-full object-cover  text-blue-800 dark:text-blue-300 bg-[#D4DBE5]"
                aria-hidden="true"
                // xmlns="http://www.w3.org/2000/svg"
                src="https://i.ibb.co/pWLQxfv/download-2-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-3xl font-extrabold text-[#836b6c] dark:text-white ">
              Create Your Beautiful Profile
            </h3>

            <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">
              Create a profile by providing personal details, interests, and
              partner preferences for a comprehensive matchmaking experience on
              the platform.
            </p>
          </div>
        </li>
        <li className="relative mb-6 sm:mb-0">
          <div className="flex items-center">
            <div className="z-10 flex items-center justify-center  bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
              <img
                className="w-[150px] rounded-full  text-blue-800 dark:text-blue-300 bg-[#D4DBE5]"
                aria-hidden="true"
                // xmlns="http://www.w3.org/2000/svg"
                src="https://i.ibb.co/HCSMx2y/download-3-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="text-3xl font-extrabold text-[#836b6c] dark:text-white">
              Search Your Lifetime Partner .
            </h3>

            <p className="text-xl font-semibold text-gray-500 dark:text-gray-400">
              Search for your life partner based on preferences, interests, and
              compatibility to find a meaningful and lasting relationship.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default HowToWork;
