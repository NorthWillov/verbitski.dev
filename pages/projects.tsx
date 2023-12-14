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
              img="/assets/projects/clubsapp.png"
              title="Clubs App"
              desc="Unlock the Potential of Communication with Clubs App. Connect with a community of different kind of people. Our platform connects you with a global community of of like-minded people. Create or find clubs of similar interests absolutely free of charge. All participants are verified and you can be sure that you are communicating with real people. Our platform helps increase foot traffic and boost sales for business

              "
              demoLink="https://web-solution.vercel.app/"
              sourceLink="https://github.com/NorthWillov/web-solution"
              technologies={["React.js", "Next.js", "Vercel", "Mailchimp"]}
            />

            <Project
              img="/assets/projects/michael.png"
              title="Michał Potratz - Camera Operator"
              desc="Michał Potratz. Camera Operator, film editor and journalist student. My experience gain in TV, movie plans and making my own production. I have a pleasure to work on production for EPEE, Betclic, Just Dance, Mitusbishi Electric, television TBN Poland (TBN Polska), Orange. With the pleasure i gonna realize your idea on the highets level. Check out my portfolio on main site!"
              demoLink="https://www.michaelpotratz.com/"
              sourceLink="https://github.com/NorthWillov/michal-operator"
              technologies={["React.js", "MongoDB", "Express.js"]}
            />

            <Project
              img="/assets/projects/mediavibes.png"
              title="Media Agency - mediavibes"
              desc="Mediavibes is a versatile media agency that specializes in creating, managing, and optimizing advertising campaigns across various platforms. Their services encompass product and brand advertising, bolstering brand image, and reaching target audiences effectively."
              demoLink="https://dommediowymv.pl"
              sourceLink="https://github.com/NorthWillov"
              technologies={["React.js", "Next.js", "Vercel"]}
            />

            <Project
              img="/assets/projects/riccardo.png"
              title="Pizzeria 'Riccardo' 🍕"
              desc="Pizzeria 'Riccardo' is a cutting-edge Full Stack Web Application designed to revolutionize the food delivery experience from 'Pizzeria & Restaurant - Riccardo' 👨🏻‍🍳. This digital platform seamlessly connects hungry customers with the delectable offerings of Riccardo's renowned culinary expertise, all from the comfort of their screens."
              demoLink="https://riccardo.onrender.com/"
              sourceLink="https://github.com/NorthWillov/food_service"
              technologies={[
                "React.js",
                "Redux",
                "Typescript",
                "Webpack",
                "MongoDB",
                "Express.js",
                "Bootstrap",
              ]}
            />

            <Project
              img="/assets/projects/omb.png"
              title="National Business Meetings"
              desc="National Business Meetings are pivotal gatherings that convene professionals and stakeholders from various industries within a country to exchange insights, foster collaboration, and explore growth opportunities. These events serve as a platform for networking, knowledge sharing, and discussing emerging trends that influence the business landscape."
              demoLink="https://4dobrybiznes.pl"
              sourceLink="https://github.com/NorthWillov"
              technologies={["React.js", "Next.js", "Vercel"]}
            />
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Projects;
