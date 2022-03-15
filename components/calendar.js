import {Fragment} from "react";

function Calendar(props) {
  // <!-- component -->
  // <!-- https://dribbble.com/shots/14959823-Dashboard-UI-Elements -->
  {
    /*variation dark set*/
  }
  return (
    <Fragment>
      {/* // <div className="h-screen bg-gray-100 p-6">  */}
      <div className="xl:w-5/12">
        <div className="flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-auto mx-auto py-4 px-2  md:mx-12">
          <div className="flex group hover:bg-green-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                  {" "}
                  Sun{" "}
                </p>
                <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                  {" "}
                  11{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex group hover:bg-green-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                  {" "}
                  Mon{" "}
                </p>
                <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                  {" "}
                  12{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex group hover:bg-green-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center  w-16">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                  {" "}
                  Tue{" "}
                </p>
                <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                  {" "}
                  13
                </p>
              </div>
            </div>
          </div>

          <div className="flex group bg-green-600 shadow-lg dark-shadow rounded-lg mx-1 cursor-pointer justify-center relative  w-16">
            <span className="flex h-3 w-3 absolute -top-1 -right-1">
              <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-green-400 "></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-200"></span>
            </span>
            <p
              className="flex h-3 w-15 absolute text-white text-center whitespace-normal"
              style={{fontSize: "0.60rem"}}
            >
              Fully Booked
            </p>
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-gray-100 text-sm"> Wed </p>
                <p className="text-gray-100  mt-3 font-bold"> 14 </p>
              </div>
            </div>
          </div>

          <div className="flex group hover:bg-green-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300 cursor-pointer justify-center w-16">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                  {" "}
                  Thu{" "}
                </p>
                <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                  {" "}
                  15{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex group hover:bg-green-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center  w-16">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                  {" "}
                  Fri{" "}
                </p>
                <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                  {" "}
                  16{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="flex group hover:bg-green-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
            <div className="flex items-center px-4 py-4">
              <div className="text-center">
                <p className="text-gray-900 group-hover:text-gray-100 text-sm transition-all	duration-300">
                  {" "}
                  Sat{" "}
                </p>
                <p className="text-gray-900 group-hover:text-gray-100 mt-3 group-hover:font-bold transition-all	duration-300">
                  {" "}
                  17{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* //  </div> */}
        <div className="flex justify-center p-4">
          <div className="bg-white shadow-xl rounded-lg w-3/4">
            <ul className="divide-y divide-gray-300">
              <li className="p-4 hover:bg-green-50 cursor-pointer text-center">
                10 AM - 11 AM
              </li>
              <li className="p-4 hover:bg-green-50 cursor-pointer text-center">
                11 AM - 12 PM
              </li>
              <li className="p-4 hover:bg-green-50 cursor-pointer text-center">
                12 PM - 1 PM
              </li>
              <li className="p-4 hover:bg-green-50 cursor-pointer text-center">
                1 PM - 2 PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Calendar;
