import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [navItems] = useState([
    { name: "Home" },
    { name: "關於我" },
    { name: "工作經歷" },
    { name: "技能" },
    { name: "作品集" },
  ]);

  return (
    <>
      <div className="fixed z-50 w-screen px-5 backdrop-blur-sm md:px-0">
        <div className="flex h-[8vh] items-center justify-between md:justify-around">
          <Link href="/">
            <Image alt="" width={100} height={100} src={"/logo.png"} />
          </Link>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-[5e5b78] hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            {navItems.map((item, index) => (
              <button
                key={index}
                className="text-base font-bold text-black hover:text-gray-600"
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
        <div
          className={
            open
              ? "pointer-events-auto visible absolute inset-x-0 top-0 origin-top-right scale-100 transform p-2 opacity-100 transition duration-200 ease-out md:hidden"
              : "pointer-events-none invisible absolute inset-x-0 top-0 origin-top-right scale-95 transform p-2 opacity-0 transition md:hidden"
          }
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <Image alt="" width={100} height={100} src={"/logo.png"} />
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item, index) => (
                    <button
                      key={index}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                    >
                      <span className="ml-3 text-base font-medium text-gray-900">
                        {item.name}
                      </span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
