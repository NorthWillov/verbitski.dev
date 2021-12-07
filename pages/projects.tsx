import React, { FC } from "react"
import Container from "../components/container"
import Layout from "../components/layout"
import Head from "next/head"
import Navbar from "../components/navbar"

const Projects: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Verbitski | Software Developer</title>
      </Head>
      <Container>
        <Navbar />
        <h1>Projects:</h1>
      </Container>
    </Layout>
  )
}

export default Projects
