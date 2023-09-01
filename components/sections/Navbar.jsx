"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);
  const [profileToggle, setProfileToggle] = useState(false);
  const links = [
    {
      id: 1,
      name: "home",
      path: "/",
    },
    {
      id: 2,
      name: "gallery",
      path: "/gallery",
    },
    {
      id: 3,
      name: "contact",
      path: "/contact",
    },
    {
      id: 4,
      name: "application",
      path: "/application",
    },
  ];
  function handleWindowClick(event) {
    if (event.target.closest(".navbar") === null) {
      setToggle(true);
    }
  }

  useEffect(() => {
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <>
      <header className="w-full z-50 max-w-[1450px] mx-auto pl-6 pr-7 py-3 md:px-12 xl:px-16 sticky  left-0 top-0 bg-white-gray border-b border-gray-300/50">
        <nav
          className="flex relative 
       justify-between items-center navbar"
        >
          <div>
            <Link href="/">
              <h1 className="text-lg font-bold capitalize">techZone</h1>
            </Link>
          </div>
          <div
            className={`absolute lg:static w-3/4 ${
              toggle ? "scale-[0] lg:scale-[1]" : "scale-1"
            } lg:w-fit min-h-[89vh] lg:min-h-fit top-[60px]  pt-7 lg:pt-0 pr-3 transition-all duration-500 -left-9 md:-left-16 origin-top-left bg-white-gray `}
          >
            {links.map((link) => (
              <Link
                key={link.id}
                className="block text-sky-900 lg:inline uppercase  font-medium py-2 lg:py-0 ml-12 text-[0.9rem] border-b border-neel lg:border-white lg:border-b md:text-md hover:text-sky-600 hover:border-b-2 hover:border-sky-600 transition-colors duration-400 mb-5"
                href={link.path}
                onClick={() => setToggle((prev) => !prev)}
              >
                {link.name}
              </Link>
            ))}
            {/* mobile view only */}
            <button
              onClick={() => setToggle((prev) => !prev)}
              className="bg-orange-500 py-[0.8rem] px-4 text-white uppercase font-medium rounded-xl hover:border-neel-500 block  lg:hidden mt-10 ml-12 w-[78%]"
            >
              <Link href="/register">signup</Link>
            </button>
          </div>
          <div className="flex items-center gap-x-5">
            <Link href={"/"}>
              <RiSearchLine className="text-[1.4rem]" />
            </Link>
            <Link className="relative" href={"/card-items"}>
              <FaCartShopping className="text-xl" />
              <span className="absolute -top-2 -right-2 bg-yellow-500 inline-block text-[0.8rem] w-4 h-4 text-center rounded-full">
                1
              </span>
            </Link>

            {/* desktop view only */}
            <button className="bg-yellow-500 py-[0.3rem] px-4  uppercase font-medium rounded-2xl hover:bg-neel-500 text-sm hidden lg:block mr-12 lg:mr-0">
              <Link href="/register">signup</Link>
            </button>

            <button
              className="block lg:hidden   px-1 rounded-md"
              onClick={() => setToggle((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 transition-all duration-500 text-sky-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    toggle
                      ? "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
                      : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
