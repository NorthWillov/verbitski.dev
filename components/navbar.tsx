import Link from "next/link"
import { useRouter } from "next/router"

export const Navbar = () => {
  const router = useRouter()
  return (
    <nav className="flex justify-around p-3 mt-5">
      <div className="">
        <Link href="/">
          <a className="text-xl font-bold">VERBITSKI</a>
        </Link>
      </div>
      <div>
        <ul className="flex">
          <li className={router.pathname == "/" ? "underline" : ""}>
            <Link href="/">
              <a className="p-3">ABOUT</a>
            </Link>
          </li>
          <li className={router.pathname == "/blog" ? "underline" : ""}>
            <Link href="/blog">
              <a className="p-3">BLOG</a>
            </Link>
          </li>
          <li className={router.pathname == "/projects" ? "underline" : ""}>
            <Link href="/projects">
              <a className="p-3">PROJECTS</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
