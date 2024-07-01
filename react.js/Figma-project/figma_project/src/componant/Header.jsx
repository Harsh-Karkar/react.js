import React, { useState } from "react";
import girl from "../assets/girl1.png";
import Logo from '../assets/dark.png.png'

 const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center md:flex-wrap">
          <h1 className="font-bold text-xl w-full md:w-auto mb-4 md:mb-0">
            <a href="#" className="text-blue-500">
              <img src={Logo} alt="" />
            </a>
          </h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:bg-gray-700 text-black border hover:text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 hover:text-gray-800"
            onClick={handleToggleSidebar}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15z" />
            </svg>
          </button>
        </div>
      </header>

      {sidebarOpen && (
        <div
          className="sidebar fixed top-0 left-0 w-64 h-screen bg-white shadow-md p-4"
          style={{
            backgroundImage: `url(${girl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <nav>
            <ul className="flex flex-col space-y-6">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}

      <main className="container mx-auto py-12 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">
              Building digital products, brands{" "}
              <span className="text-blue-500">experience.</span>
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
              pellentesque mi, volutpat sagittis in eu erat.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2">
            <img src={girl} alt="Woman wearing green top" className="rounded-md" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Header;
