import React, { FC } from "react"
import Container from "../components/container"
import Layout from "../components/layout"
import Head from "next/head"
import Link from "next/link"
import Navbar from "../components/navbar"

const Projects: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Verbitski | Software Developer</title>
      </Head>
      <Container>
        <Navbar />
        <h1 className="text-3xl text-center my-10">Projects</h1>
        <div className="w-64 border border-black rounded">
          <img
            className=""
            src="https://i.ibb.co/YB36KZc/pizza-wege.png"
            alt="project"
          />
          <h2 className="text-center text-xl"> Pizzeria 'Riccardo' 🍕</h2>
          <p className="text-center">
            Full Stack Web Application for food delivery from "Pizzeria &
            Restaurant - Riccardo" 👨‍🍳
          </p>
          <div className="flex justify-around">
            <Link href="https://riccardopizzeria.herokuapp.com">
              <a className="border border-black rounded p-1" target="_blank">
                <i className="fas fa-play"></i> Demo
              </a>
            </Link>
            <Link href="https://github.com/NorthWillov/food_service">
              <a className="border border-black rounded p-1" target="_blank">
                <i className="fab fa-github"></i> Source
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Projects
