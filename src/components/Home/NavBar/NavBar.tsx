"use client";
import Link from "next/link";
import { navLinks } from "../../../../constant/constant";
import { HiBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

interface Props {
  openNav: () => void;
}

const NavBar = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState<boolean>(false);

  const handleClick = () => {
    // Открытие PDF файла
    window.open("/resume.pdf", "_blank");
  };

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <header
      className={`fixed ${navBg ? "bg-slate-800/80 backdrop-blur-md" : "bg-transparent"
        } h-[12vh] w-full transition-all duration-500`}
    >
      <div className="flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 animate-pulse">
          7chyngyz
        </h1>
        <div className="flex items-center space-x-10">
          <div className="hidden  lg:flex items-center space-x-8">
            {navLinks.map((navlink) => (
              <Link key={navlink.id} href={navlink.url}>
                <p className="nav__link">{navlink.label}</p>
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="md:px-3 md:py-2.5 px-6 py-1.5 text-white font-semibold
             text-xs md:text-sm transition-all duration-200 rounded-lg mt-1 bg-blue-700
             hover:bg-blue-900 flex items-center space-x-2"
            >
              <span>Download CV</span>
              <FaDownload />
            </button>
            <HiBars3BottomRight
              onClick={openNav}
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
