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

        <div className="flex justify-around">
          <div className="w-64 border border-black rounded p-1">
            <Link href="https://riccardopizzeria.herokuapp.com">
              <a target="_blank">
                <img
                  className="h-64"
                  src="https://i.ibb.co/YB36KZc/pizza-wege.png"
                  alt="project"
                />
              </a>
            </Link>
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

          <div className="w-64 border border-black rounded p-1">
            <Link href="https://northwillov.github.io/colors-app">
              <a target="_blank">
                <img
                  className="h-64"
                  src="/assets/projects/colors_app.png"
                  alt="project"
                />
              </a>
            </Link>
            <h2 className="text-center text-xl"> Clone of Flat UI Colors 🍕</h2>
            <p className="text-center">
              A clone of websites like Flat UI Colors and Material UI Colors.
            </p>
            <div className="flex justify-around">
              <Link href="https://northwillov.github.io/colors-app">
                <a className="border border-black rounded p-1" target="_blank">
                  <i className="fas fa-play"></i> Demo
                </a>
              </Link>
              <Link href="https://github.com/NorthWillov/colors-app">
                <a className="border border-black rounded p-1" target="_blank">
                  <i className="fab fa-github"></i> Source
                </a>
              </Link>
            </div>
          </div>

          <div className="w-64 border border-black rounded p-1">
            <Link href="https://northwillov.github.io/virtuslab">
              <a target="_blank">
                <img
                  className="h-64"
                  src="/assets/projects/starwars.png"
                  alt="project"
                />
              </a>
            </Link>
            <h2 className="text-center text-xl">
              Star Wars Characters Catalogue
            </h2>
            <p className="text-center">
              Catalogue, containing all data about starwars foes.
            </p>
            <div className="flex justify-around">
              <Link href="https://northwillov.github.io/virtuslab">
                <a className="border border-black rounded p-1" target="_blank">
                  <i className="fas fa-play"></i> Demo
                </a>
              </Link>
              <Link href="https://github.com/NorthWillov/virtuslab">
                <a className="border border-black rounded p-1" target="_blank">
                  <i className="fab fa-github"></i> Source
                </a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Projects
