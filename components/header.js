import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "./logo";

function Header() {
  const [menuClass, setMenuClass] = useState(
    "absolute hidden top-0 left-0 right-0 z-50 flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow transition duration-200"
  );

  const handleMenu = () => {
    setMenuClass(
      "absolute flex top-0 left-0 right-0 z-50 flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow transition duration-200"
    );
  };

  const handleClose = () => {
    setMenuClass(
      "absolute hidden top-0 left-0 right-0 z-50 flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow transition duration-200"
    );
  };

  const router = useRouter();
  console.log(router.asPath);
  return (
    <header className="flex justify-between items-center border-b py-4 md:py-8 mb-8 md:mb-12 xl:mb-16 sticky top-0 z-50 bg-white">
      {/* <!-- logo - start --> */}
      <Link href="/" passHref>
        <Logo />
      </Link>
      {/* <!-- logo - end --> */}

      {/* <!-- nav - start --> */}
      <nav className="hidden lg:flex gap-12">
        {/* <a
          href="#"
          className="text-green-700 border-b-2 border-green-600 text-lg font-semibold hover:border-green-500 
          active:text-green-700 active:border-green-500 transition duration-200"
        > */}
        <Link href="#" passHref>
          <a
            // href="#"
            className={
              router.asPath == "/" || router.asPath == "/#"
                ? `text-green-700 border-b-2 border-green-600 text-lg font-semibold hover:border-green-500
          active:text-green-700 active:border-green-500 transition duration-200`
                : `text-gray-600 
          active:text-green-700 active:border-green-500 text-lg font-semibold`
            }
          >
            <span
              className={
                router.asPath == "/" || router.asPath == "/#"
                  ? undefined
                  : "link no-underline link-underline link-underline-black"
              }
            >
              Home
            </span>
          </a>
        </Link>
        <Link href="/#gallery" passHref>
          <a
            // href="#"
            className={
              router.asPath == "/#gallery"
                ? `text-green-700 border-b-2 border-green-600 text-lg font-semibold hover:border-green-500
            active:text-green-700 active:border-green-500 transition duration-200`
                : "text-gray-600 active:text-green-700 active:border-green-500 text-lg font-semibold"
            }
          >
            <span
              className={
                router.asPath != "/#gallery"
                  ? "link no-underline link-underline link-underline-black"
                  : undefined
              }
            >
              Gallery
            </span>
          </a>
        </Link>
        <Link href="#" passHref>
          <a
            // href="#"
            className="text-gray-600 
          active:text-green-700 active:border-green-500 text-lg font-semibold"
          >
            <span className="link no-underline link-underline link-underline-black">
              Blog
            </span>
          </a>
        </Link>
        <Link href="/#location" passHref>
          <a
            // href="#"
            className={
              router.asPath == "/#location"
                ? `text-green-700 border-b-2 border-green-600 text-lg font-semibold hover:border-green-500
            active:text-green-700 active:border-green-500 transition duration-200`
                : "text-gray-600 active:text-green-700 active:border-green-500 text-lg font-semibold"
            }
          >
            <span
              className={
                router.asPath != "/#location"
                  ? "link no-underline link-underline link-underline-black"
                  : undefined
              }
            >
              Location
            </span>
          </a>
        </Link>
      </nav>
      {/* <!-- nav - end --> */}

      {/* <!-- buttons - start --> */}
      <Link href="#">
        <a className="hidden lg:inline-block btn capitalize border-none bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
          Events
        </a>
      </Link>
      <div className="inline-flex lg:hidden">
        <button
          type="button"
          className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 
        text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
          onClick={() => handleMenu()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
        <div className={menuClass}>
          <button
            className="self-end flex-none px-2 ml-2 hover:bg-gray-300 focus-visible:ring ring-indigo-300 rounded-lg"
            onClick={() => handleClose()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span className="sr-only">Close Menu</span>
          </button>
          <a
            href="#"
            className="w-full p-3 text-center font-semibold text-gray-500 hover:bg-green-300 hover:text-green-700"
          >
            Home
          </a>
          <Link href="/#gallery" passHref>
            <a
              // href="#"
              className="w-full p-3 text-center font-semibold text-gray-500 hover:bg-green-300 hover:text-green-700"
            >
              Gallery
            </a>
          </Link>
          <a
            href="#"
            className="w-full p-3 text-center font-semibold text-gray-500 hover:bg-green-300 hover:text-green-700"
          >
            Blog
          </a>
          <Link href="/#location" passHref>
            <a
              href="#"
              className="w-full p-3 text-center font-semibold text-gray-500 hover:bg-green-300 hover:text-green-700"
            >
              Location
            </a>
          </Link>
          <a
            href="#"
            className="w-full p-3 text-center font-semibold text-gray-500 hover:bg-green-300 hover:text-green-700"
          >
            Events
          </a>
        </div>
      </div>
      {/* <!-- buttons - end --> */}
    </header>
  );
}

export default Header;
