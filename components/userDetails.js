function UserDetails() {
  return (
    // <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="xl:w-5/12 h-100 lg:h-auto">
      <form className="max-w-lg border rounded-lg mx-auto">
        <div className="flex flex-col gap-6 p-4 md:p-8 2xl:gap-10 2xl:py-16">
          <div>
            <label
              htmlFor="fullname"
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Full Name
            </label>
            <input
              name="fullname"
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="inline-block text-gray-800 text-sm sm:text-base mb-2"
            >
              Phone Number
            </label>
            <input
              name="phone"
              type="number"
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2"
            />
          </div>

          <button className="block bg-gray-800 hover:bg-gray-700 active:bg-gray-600 focus-visible:ring ring-gray-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
            Book
          </button>
        </div>
      </form>
    </div>
    // </div>
  );
}

export default UserDetails;
