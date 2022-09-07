import Footer from "./footer"
import Meta from "./meta"
import Navbar from "./navbar"

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-black sans">
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
