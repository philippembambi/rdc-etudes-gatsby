import React, { useEffect, useRef, useState } from "react";
import * as styles from "./header.module.scss";
import logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const humbugerRef = useRef();
  const navBarRef = useRef();
  const [toggleNav, setToggleNav] = useState(false);
  useEffect(() => {
    
    if(toggleNav) {
      navBarRef.current.classList.remove("hidden");
      navBarRef.current.classList.add("visible");
    }
    else{
      navBarRef.current.classList.remove("visible");
      navBarRef.current.classList.add("hidden");
    }
  }, [toggleNav]);

  return (
    <nav class="bg-white shadow-lg">
      <div class="max-w-6xl mx-auto px-4">
        <div class="flex justify-between">
          <div class="flex space-x-7">
            <div>
              <a href="#" class="flex items-center py-4 px-2">
                <img src={logo} alt="Logo" class="h-14 w-14 mr-2" />
              </a>
            </div>
            <div class="hidden md:flex items-center space-x-1">
              <a
                href="/"
                class="py-4 px-2 hover:text-white text-sky-600 border-b-4 border-sky-600 font-semibold "
              >
                Home
              </a>
              <a
                href="/bourse"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-sky-600 transition duration-300"
              >
                Bourse
              </a>
              <a
                href="/aboutUs"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-sky-600 transition duration-300"
              >
                A propos
              </a>
              <a
                href="/contactUs"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-sky-600 transition duration-300"
              >
                Contact Us
              </a>
              <a
                href="/healthcare"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-sky-600 transition duration-300"
              >
                Examen médicaux
              </a>
              <a
                href="/help"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-sky-600 transition duration-300"
              >
                Aide
              </a>
              <a
                href="/country"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-sky-600 transition duration-300"
              >
                Pays
              </a>
              <a
                href="/privacy"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-sky-600 transition duration-300"
              >
                Politique de confidentialité
              </a>
              <a
                href="/bourseDetails"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-sky-600 transition duration-300"
              >
                Détails Bourse
              </a>
              <a
                href="/partenership"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-sky-600 transition duration-300"
              >
                Partenariat
              </a>
              <a
                href="/faq"
                class="py-4 px-2 text-gray-500 font-semibold hover:text-sky-600 transition duration-300"
              >
                FAQ
              </a>
            </div>
          </div>

          <div class="hidden md:flex items-center space-x-3 ">
            <a
              href=""
              class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-sky-600 hover:text-white transition duration-300"
            >
              Log In
            </a>
            <a
              href=""
              class="py-2 px-2 font-medium text-white bg-sky-600 rounded hover:bg-sky-500 transition duration-300"
            >
              Sign Up
            </a>
          </div>

          <div class="md:hidden flex items-center">
            <button
              class="outline-none flex"
              ref={humbugerRef}
              onClick={(e) => setToggleNav(!toggleNav)}
            >
              {toggleNav ? (
                <FontAwesomeIcon
                  className="text-4xl text-cyan-500"
                  icon={faXmark}
                />
              ) : (
                <svg
                  class="w-10 h-10 text-cyan-500"
                  x-show="!showMenu"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
          </div>

          <div class="hidden mobile-menu">
            <ul class="">
              <li class="active">
                <a
                  href="/"
                  class="block text-sm px-2 py-4 text-white bg-sky-600 font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/bourse"
                  class="block text-sm px-2 py-4 hover:bg-sky-600 transition duration-300"
                >
                  Bourse
                </a>
              </li>
              <li>
                <a
                  href="/aboutUs"
                  class="block text-sm px-2 py-4 hover:bg-sky-600 transition duration-300"
                >
                  A propos
                </a>
              </li>
              <li>
                <a
                  href="/contactUs"
                  class="block text-sm px-2 py-4 hover:bg-sky-600 transition duration-300"
                >
                  Contactez-nous
                </a>
              </li>
              <li>
                <a
                  href="/healthcare"
                  class="block text-sm px-2 py-4 hover:bg-sky-600 transition duration-300"
                >
                  Examens médicaux
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  class="block text-sm px-2 py-4 hover:bg-sky-600 transition duration-300"
                >
                  Aide
                </a>
              </li>
              <li>
                <a
                  href="/country"
                  class="block text-sm px-2 py-4 hover:bg-sky-600 transition duration-300"
                >
                  Etudier en France
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  class="block text-sm px-2 py-4 hover:bg-sky-600 transition duration-300"
                >
                  Confidentialité
                </a>
              </li>
              <li>
                <a
                  href="/bourseDetails"
                  class="block text-sm px-2 py-4 hover:bg-sky-600 transition duration-300"
                >
                  Bourses
                </a>
              </li>
              <li>
                <a
                  href="/partenership"
                  class="block text-sm px-2 py-4 hover:bg-sky-600 transition duration-300"
                >
                  Partenariat
                </a>
              </li>
              <li>
                <a
                  href="/faq"
                  class="block text-sm px-2 py-4 hover:bg-sky-600 transition duration-300"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={
            "hidden z-30 absolute w-full left-0 text-center text-white uppercase text-xs " +
            styles.navbar__container
          }
          ref={navBarRef}
        >
          <ul className="w-full">
            <li className="border py-2 border-white border-opacity-60 opacity-60">
              <a href="/">Accueil</a>
            </li>
            <li className="border py-2 border-white border-opacity-60 opacity-60">
              {" "}
              <a href="/bourse">Bourses d'études</a>
            </li>
            <li className="border py-2 border-white border-opacity-60 opacity-60">
              {" "}
              <a href="/bourseDetails">Détails Bourses</a>
            </li>
            <li className="border py-2 border-white border-opacity-60 opacity-60">
              {" "}
              <a href="/healthcare">Examens Médicaux</a>
            </li>
            <li className="border py-2 border-white border-opacity-60 opacity-60">
              {" "}
              <a href="/country">&Eacute;tudier en France</a>
            </li>
            <li className="border py-2 border-white border-opacity-60 opacity-60">
              {" "}
              <a href="/partenership">Partenariat</a>
            </li>
            <li className="border py-2 border-white border-opacity-60 opacity-60">
              {" "}
              <a href="/privacy">Confidentialité</a>
            </li>
            <li className="border py-2 border-white border-opacity-60 opacity-60">
              {" "}
              <a href="/aboutUs">&Agrave; propos</a>
            </li>
            <li className="border py-2 border-white border-opacity-60 opacity-60">
              {" "}
              <a href="/help">Aide</a>
            </li>
            <li className="border py-2 border-white border-opacity-60 opacity-60">
              {" "}
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
