function UserDetails() {
  return (
    // <div className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="xl:w-5/12 h-100 lg:h-auto">
      <form className="max-w-lg mx-auto">
        <div className="flex flex-col gap-6 p-4 md:p-8 2xl:gap-10 2xl:py-16">
          <div>
            <label
              htmlFor="fullname"
              className="inline-block text-gray-800 text-sm sm:text-base"
            >
              Full Name
              <p className="text-xs text-gray-500 mb-2">
                Please enter the full name like Karthik Nadig.
              </p>
            </label>
            <input
              name="fullname"
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2"
              type="text"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="inline-block text-gray-800 text-sm sm:text-base"
            >
              Phone Number
              <p className="text-xs text-gray-500 mb-2">
                Please enter 10 digit phone number like 9999999999.
              </p>
            </label>
            <input
              name="phone"
              type="tel"
              pattern="[0-9]{10}"
              className="w-full bg-gray-50 text-gray-800 border focus:ring ring-green-300 rounded outline-none transition duration-100 px-3 py-2"
              required
            />
          </div>

          <button className="btn-book">Book</button>
        </div>
      </form>
    </div>
    // </div>
  );
}

export default UserDetails;
