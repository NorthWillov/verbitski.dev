import Container from "../components/container"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
import Link from "next/link"
import Head from "next/head"
import { FC } from "react"

const Index: FC = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Verbitski | Software Developer</title>
        </Head>
        <Container>
          <Navbar />
          <div className="flex mt-10 items-center justify-around">
            <img
              className="w-64 h-64 rounded-full"
              srcSet="/assets/blog/authors/artem.jpeg"
              alt="Artem"
            />
            <div className="w-1/2">
              <p>
                <b>Hi there</b> 👋 <br />I am a software engineer with hands-on
                to build user-friendly and professional looking sites. I have
                knowledge to solve a problem across many mediums and especially
                adept at taking an already existed project to the next level.
                With every project I aim to make the user experience intuitive
                and easy to follow for any level of user. I look forward to
                using my skills as a developer and designer as part of a
                quality-driven team to build easy-to-use and professional
                looking sites.
              </p>
              <div className="mt-3">
                <Link href="https://github.com/NorthWillov">
                  <a target="_blank">
                    <i className="fab fa-github text-4xl hover:text-green-700 cursor-pointer mr-3"></i>
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/artemverbytskyi">
                  <a target="_blank">
                    <i className="fab fa-linkedin text-4xl hover:text-green-700 cursor-pointer mr-3"></i>
                  </a>
                </Link>
                <Link href="https://www.instagram.com/artemverbytskyi">
                  <a target="_blank">
                    <i className="fab fa-instagram text-4xl hover:text-green-700 cursor-pointer mr-3"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index
