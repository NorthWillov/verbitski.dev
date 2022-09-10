import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import Container from "./container";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-accent-1 text-white py-5 fixed top-0 left-0 right-0 z-30">
      <Container>
        <div className="flex justify-between">
          <Link scroll={false} href="/">
            <a className="text-xl font-bold ml-5 md:ml-0">VERBITSKI</a>
          </Link>
          <nav className="md:flex items-center space-x-8">
            {/* MOBILE SECTION */}

            <section className="flex md:hidden">
              <div
                className="space-y-2 mr-10 mt-1"
                onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
              >
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              </div>

              <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                  <svg
                    className="h-8 w-8 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  <li
                    className={`${
                      router.pathname == "/" ? "underline" : ""
                    } burger-item`}
                  >
                    <Link scroll={false} href="/">
                      <a>HOME</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      router.pathname == "/about" ? "underline" : ""
                    } burger-item`}
                  >
                    <Link scroll={false} href="/about">
                      <a>ABOUT</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      router.pathname == "/blog" ? "underline" : ""
                    } burger-item`}
                  >
                    <Link scroll={false} href="/blog">
                      <a>BLOG</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      router.pathname == "/projects" ? "underline" : ""
                    } burger-item`}
                  >
                    <Link scroll={false} href="/projects">
                      <a>PROJECTS</a>
                    </Link>
                  </li>
                  <li
                    className={`${
                      router.pathname == "/contact" ? "underline" : ""
                    } burger-item`}
                  >
                    <Link scroll={false} href="/contact">
                      <a>CONTACT</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </section>

            {/* DESCTOP SECTION */}

            <ul className="hidden space-x-8 md:flex">
              <li
                className={`${router.pathname == "/" ? "underline" : ""}`}
              >
                <Link scroll={false} href="/">
                  <a>HOME</a>
                </Link>
              </li>
              <li
                className={`${
                  router.pathname == "/about" ? "underline" : ""
                }`}
              >
                <Link scroll={false} href="/about">
                  <a>ABOUT</a>
                </Link>
              </li>
              <li
                className={`${
                  router.pathname == "/blog" ? "underline" : ""
                }`}
              >
                <Link scroll={false} href="/blog">
                  <a>BLOG</a>
                </Link>
              </li>
              <li
                className={`${
                  router.pathname == "/projects" ? "underline" : ""
                }`}
              >
                <Link scroll={false} href="/projects">
                  <a>PROJECTS</a>
                </Link>
              </li>
              <li
                className={`${
                  router.pathname == "/contact" ? "underline" : ""
                }`}
              >
                <Link scroll={false} href="/contact">
                  <a>CONTACT</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
