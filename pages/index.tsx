import Container from "../components/container"
import Layout from "../components/layout"
import Navbar from "../components/navbar"
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
            <p className="w-1/2">
              Hi there 👋 <br />I am a Front-End Developer with hands-on to
              build user-friendly and professional looking sites. I have
              knowledge to solve a problem across many mediums and especially
              adept at taking an already existed project to the next level. With
              every project I aim to make the user experience intuitive and easy
              to follow for any level of user. I look forward to using my skills
              as a developer and designer as part of a quality-driven team to
              build easy-to-use and professional looking sites.
            </p>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index
