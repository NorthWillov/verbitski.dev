import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"

export const Navbar = () => {
  const router = useRouter()
  const { theme, setTheme } = useTheme()

  return (
    <nav className="flex justify-around p-3 mt-5">
      <div className="">
        <Link href="/">
          <a className="text-xl font-bold">VERBITSKI</a>
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li className={`${router.pathname == "/" ? "underline" : ""} pr-6 tracking-wide`}>
            <Link href="/">
              <a>ABOUT</a>
            </Link>
          </li>
          <li className={`${router.pathname == "/blog" ? "underline" : ""} pr-6 tracking-wide`}>
            <Link href="/blog">
              <a>BLOG</a>
            </Link>
          </li>
          <li className={`${router.pathname == "/projects" ? "underline" : ""} pr-6 tracking-wide`}>
            <Link href="/projects">
              <a>PROJECTS</a>
            </Link>
          </li>
          <li className="w-5">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <i className="far fa-lightbulb text-xl"></i>
              ) : (
                <i className="fas fa-moon text-xl"></i>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
