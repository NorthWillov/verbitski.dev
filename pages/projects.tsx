import React, { FC } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import Project from "../components/project";

const Projects: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Verbitski | Software Developer</title>
      </Head>
      <div className="paper-bg mt-16 text-black">
        <Container>
          <h1 className="text-7xl md:text-8xl w-11/12 m-auto md:w-full md:m-0 pt-20">
            Projects
          </h1>

          <hr className="border-accent-1 border-2 w-11/12 m-auto md:w-full md:m-0" />

          <div className="flex flex-wrap sm:justify-between justify-center mt-20 pb-56">
            <Project
              img="/assets/projects/mediavibes.jpg"
              title="Media Agency - mediavibes"
              desc="Mediavibes is a versatile media agency that specializes in creating, managing, and optimizing advertising campaigns across various platforms. With a network of affiliated companies and partners, they cater to clients' needs at local, national, and international levels. Their services encompass product and brand advertising, bolstering brand image, and reaching target audiences effectively."
              demoLink="https://dommediowymv.pl"
              sourceLink="https://github.com/NorthWillov"
            />

            <Project
              img="/assets/projects/omb.jpeg"
              title="National Business Meetings"
              desc="National Business Meetings are pivotal gatherings that convene professionals and stakeholders from various industries within a country to exchange insights, foster collaboration, and explore growth opportunities. These events serve as a platform for networking, knowledge sharing, and discussing emerging trends that influence the business landscape."
              demoLink="https://4dobrybiznes.pl"
              sourceLink="https://github.com/NorthWillov"
            />

            <Project
              img="/assets/projects/ricardo.jpg"
              title="Pizzeria 'Riccardo' 🍕"
              desc="Pizzeria 'Riccardo' is a cutting-edge Full Stack Web Application designed to revolutionize the food delivery experience from 'Pizzeria & Restaurant - Riccardo' 👨🏻‍🍳. This digital platform seamlessly connects hungry customers with the delectable offerings of Riccardo's renowned culinary expertise, all from the comfort of their screens."
              demoLink="https://github.com/NorthWillov"
              sourceLink="https://github.com/NorthWillov/food_service"
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Projects;
