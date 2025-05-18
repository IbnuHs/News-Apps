import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Dropdown } from "flowbite-react";

export default function Navbar() {
  const [toggle, setToggle] = useState(true);

  function toggleNav() {
    setToggle(!toggle);
  }
  return (
    <div className="flex justify-between px-8 py-4 font-Sora bg-[#0E1520] text-white overflow-hidden items-center lg:px-12 lg:gap-5 z-50">
      <h1 className="text-[24px] font-zila">YourNews</h1>
      <ol
        className={` absolute top-[62px] z-10 py-10 text-white right-0 left-0 text-center font-semibold flex flex-col gap-10 shadow transition ease-in duration-75 animate-textGone bg-[#0e1520d2] ${
          toggle ? "-translate-x-full" : "translate-x-0"
        } lg:translate-x-0 lg:relative lg:flex-row lg:text-white lg:pt-0 lg:pb-0 lg:top-0 lg:items-center lg:text-[12px] lg:gap-5 xl:text-[16px] lg:bg-transparent`}
      >
        <li className="">
          <Link
            to="/"
            className="border-b-2 border-b-brown-100 lg:border-none "
          >
            Home
          </Link>
        </li>
        <li className="">
          <Link
            to="/category/business"
            className="border-b-2 border-b-brown-100 lg:border-none "
          >
            Business
          </Link>
        </li>
        <li>
          <Link
            to="/category/entertainment"
            className="border-b-2 border-b-brown-100 lg:border-none"
          >
            Entertainment
          </Link>
        </li>
        <li>
          <Link
            to="/category/general"
            className="border-b-2 border-b-brown-100 lg:border-none"
          >
            General
          </Link>
        </li>
        <li>
          <Link
            to="/category/health"
            className="border-b-2 border-b-brown-100 lg:border-none"
          >
            Health
          </Link>
        </li>
        <li>
          <Link
            to="/category/science"
            className="border-b-2 border-b-brown-100 lg:border-none"
          >
            Science
          </Link>
        </li>
        <li>
          <Link
            to="/category/sports"
            className="border-b-2 border-b-brown-100 lg:border-none"
          >
            Sports
          </Link>
        </li>
        <li>
          <Link
            to="/category/technology"
            className="border-b-2 border-b-brown-100 lg:border-none"
          >
            Technology
          </Link>
        </li>
      </ol>

      <input
        type="search"
        className="bg-transparent border-white border rounded-sm text-white text-[12px] px-4 hidden lg:block"
        placeholder="Search News..."
      />

      <button onClick={toggleNav} className="z-10 lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 stroke-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    </div>
  );
}
