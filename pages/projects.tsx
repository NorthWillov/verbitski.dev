import React, { FC } from "react"
import Container from "../components/container"
import Layout from "../components/layout"
import Head from "next/head"
import Navbar from "../components/navbar"
import Project from "../components/project"

const Projects: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Verbitski | Software Developer</title>
      </Head>
      <Container>
        <Navbar />
        <h1 className="text-3xl text-center my-10">Projects</h1>

        <div className="flex flex-wrap justify-center">
          <Project
            img="/assets/projects/pizza-wege.png"
            title="Pizzeria 'Riccardo' 🍕"
            desc="Full Stack Web Application for food delivery from 'Pizzeria & Restaurant - Riccardo' 👨🏻‍🍳"
            demoLink="https://riccardopizzeria.herokuapp.com"
            sourceLink="https://github.com/NorthWillov/food_service"
          />

          <Project
            img="/assets/projects/colors_app.png"
            title="Clone of Flat UI Colors"
            desc="A clone of websites like Flat UI Colors and Material UI Colors."
            demoLink="https://northwillov.github.io/colors-app"
            sourceLink="https://github.com/NorthWillov/colors-app"
          />

          <Project
            img="/assets/projects/star_wars.png"
            title="Star Wars Characters Catalogue"
            desc="Catalogue, containing all data about 'Star Wars' foes."
            demoLink="https://northwillov.github.io/virtuslab"
            sourceLink="https://github.com/NorthWillov/virtuslab"
          />
        </div>
      </Container>
    </Layout>
  )
}

export default Projects
