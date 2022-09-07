import Link from "next/link";
import { useRouter } from "next/router";
import Container from "./container";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="bg-accent-1 text-white py-5 fixed top-0 left-0 right-0 z-30">
      <Container>
        <div className="flex justify-between">
          <Link href="/">
            <a className="text-xl font-bold">VERBITSKI</a>
          </Link>
          <div>
            <ul className="flex">
              <li
                className={`${router.pathname == "/" ? "underline" : ""} pr-6`}
              >
                <Link href="/">
                  <a>HOME</a>
                </Link>
              </li>
              <li
                className={`${
                  router.pathname == "/about" ? "underline" : ""
                } pr-6`}
              >
                <Link href="/about">
                  <a>ABOUT</a>
                </Link>
              </li>
              <li
                className={`${
                  router.pathname == "/blog" ? "underline" : ""
                } pr-6`}
              >
                <Link href="/blog">
                  <a>BLOG</a>
                </Link>
              </li>
              <li
                className={`${
                  router.pathname == "/projects" ? "underline" : ""
                } pr-6`}
              >
                <Link href="/projects">
                  <a>PROJECTS</a>
                </Link>
              </li>
              <li
                className={`${
                  router.pathname == "/contact" ? "underline" : ""
                }`}
              >
                <Link href="/contact">
                  <a>CONTACT</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
