"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// the navbar component
const NavBar: React.FC = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  return (
    <div className="sticky top-0 z-20 py-5 bg-[#2a5846]">
      <div className="lg:max-w-screen-xl mx-auto sm:px-0 sm:max-w-screen-sm px-3  flex justify-between item-center">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl lg:text-3xl space-x-2">
            <span className="text-white">My</span>
            <span className="text-white"> Logo</span>
          </h1>
        </div>
        <div className="space-x-5 lg:text-xl flex items-center">
          <Link
            className="hover:text-slate-200 sm:inline-flex hidden text-white"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-slate-200 sm:inline-flex hidden text-white"
            href="/recipes"
          >
            Recipes
          </Link>
          <div className="relative sm:flex hidden items-center max-w-[150px] h-8 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <input
              className="peer h-full w-full outline-none text-sm text-gray-700 pl-2"
              type="text"
              id="search"
              placeholder="Search..."
            />
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <button
            className="sm:hidden inline-flex"
            onClick={() => setModalOpen(true)}
          >
            <Image
              src="/menu.png"
              alt="menu icon"
              width={30}
              height={30}
              className="w-full h-full"
            />
          </button>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#2a5846] bg-opacity-50 z-50">
          <div className="bg-[#2a5846] w-4/5 h-full absolute top-0 right-0 shadow-lg">
            <div className="flex justify-between items-center px-5 py-3 border-b">
              <button onClick={() => setModalOpen(false)}>
                <Image
                  src="/close.png"
                  alt="close icon"
                  width={30}
                  height={30}
                  className="w-full h-full"
                />
              </button>
            </div>
            <div className="flex flex-col justify-center items-center space-y-5 py-5">
              <Link onClick={() => setModalOpen(false)} href="/">
                <span className="text-xl font-bold text-white">Home</span>
              </Link>
              <Link onClick={() => setModalOpen(false)} href="/recipes">
                <span className="text-xl font-bold text-white">Recipes</span>
              </Link>
              <div className="relative items-center max-w-[150px] h-8 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                <input
                  className="peer h-full w-full outline-none text-sm text-gray-700 pl-2"
                  type="text"
                  id="search"
                  placeholder="Search..."
                />
                <div className="grid place-items-center h-full w-12 text-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
