"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        (menuRef.current as any) instanceof Element &&
        !(menuRef.current as any).contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  const menuButtons = (
    <>
      <button type="button" className="text-white bg-teal-600 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 text-center mx-3 ml-6" title="resume">Resume</button>
      <button type="button" className="w-6 h-5 text-center mx-3 rounded-sm overflow-hidden flex items-center justify-center" title="en">
        <svg className="w-6 h-6 rounded-md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" strokeWidth="300" /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use xlinkHref="#a" y="420" /><use xlinkHref="#a" y="840" /><use xlinkHref="#a" y="1260" /></g><use xlinkHref="#a" y="1680" /></g><use xlinkHref="#b" x="247" y="210" /></g><use xlinkHref="#c" x="494" /></g><use xlinkHref="#d" x="988" /><use xlinkHref="#c" x="1976" /><use xlinkHref="#e" x="2470" /></g></svg>
      </button>
      <button type="button" className="w-6 h-5 text-center mx-3 rounded-lg overflow-hidden flex items-center justify-center md:mr-0" title="fr">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" id="flag-icons-fr" viewBox="0 0 640 480">
          <path fill="#fff" d="M0 0h640v480H0z" />
          <path fill="#002654" d="M0 0h213.3v480H0z" />
          <path fill="#ce1126" d="M426.7 0H640v480H426.7z" />
        </svg>
      </button>
    </>
  );

  const menuList = (
    <>
      <ul className="w-full md:w-auto flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
        <li>
          <Link
            href="#about"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0"
            onClick={() => setOpen(false)}
          >About</Link>
        </li>
        <li>
          <Link
            href="#skills"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0"
            onClick={() => setOpen(false)}
          >Skills</Link>
        </li>
        <li>
          <Link
            href="#work"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0"
            onClick={() => setOpen(false)}
          >Work</Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/zohary-andrianome"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0"
            title="Linkedin"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/zoharyAnd"
            className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-700 md:p-0"
            title="Github"
            onClick={() => setOpen(false)}
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </li>
      </ul>
      <div className="hidden md:flex md:items-center">
        {menuButtons}
      </div>
    </>
  );

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
      <div ref={menuRef} className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap block md:hidden">ZA</span>
          <span className="self-center text-xl font-semibold whitespace-nowrap hidden md:block">Zohary Andrianome</span>
        </a>
        <div className="flex md:hidden md:order-2">
          <div className="flex items-center md:hidden">
            {menuButtons}
          </div>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false" onClick={() => setOpen(!open)}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="flex flex-col items-center justify-center w-full md:hidden">
            {menuList}
          </div>
        )}

        <div className="hidden items-center justify-center md:flex md:order-1">
          {menuList}
        </div>

      </div>
    </nav>

  );
};

export default Navbar;