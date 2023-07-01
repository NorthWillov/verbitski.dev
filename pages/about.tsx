import React from "react";
import Layout from "../components/layout";
import Container from "../components/container";
import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Verbitski | Software Developer</title>
      </Head>
      <div className="paper-bg mt-16 text-black">
        <Container>
          <h1 className="text-7xl md:text-8xl w-11/12 m-auto md:w-full md:m-0 pt-20">
            About
          </h1>

          <hr className="border-accent-1 border-2 w-11/12 m-auto md:w-full md:m-0" />

          <div className="md:flex py-16 md:justify-between items-center text-xl w-11/12 m-auto md:w-full md:m-0">
            <div className="w-8/12 m-auto md:hidden mb-10">
              <img
                className="rounded-3xl"
                src="/assets/artem_baby.jpeg"
                alt="artem"
              />
            </div>
            <div className="md:w-7/12 self-center">
              <p className="mb-10">
                👋 Welcome to verbitski.dev! I'm Artem, a passionate software
                developer with over 3 years of experience in building web
                applications that leave a lasting impact. <br />
                <br />I pour my heart and expertise into crafting robust and
                user-friendly solutions. Whether it's a responsive website, a
                scalable web application, or an innovative software experience,
                I thrive on tackling complex challenges and delivering
                exceptional results.
                <br />
                <br /> My journey in software development has equipped me with a
                wide range of skills. From front-end technologies like HTML,
                CSS, and JavaScript to back-end frameworks like Node.js and
                .NET, I have a solid foundation in full-stack development. I
                constantly stay updated with the latest tools and techniques to
                ensure the solutions I create are efficient, modern, and
                future-proof. <br />
                <br />
                Collaboration is at the core of my work philosophy. I believe in
                the power of teamwork and the magic that happens when talented
                individuals come together to create something extraordinary. If
                you have a project in mind or are interested in exploring
                potential opportunities, I'd love to hear from you. Let's
                connect and discuss how we can bring your ideas to life.
                <br />
                <br /> So, whether you're a fellow developer, a potential
                client, or someone who's simply curious about the world of
                software development, I invite you to reach out. Let's connect,
                geek out over code, and explore the exciting possibilities that
                lie ahead.
              </p>
              <div className="flex">
                <Link scroll={false} href="/contact">
                  <a className="text-lg text-white bg-accent-3 p-3 rounded-lg w-5/12 text-center">
                    Contact me
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-4/12">
              <img
                className="rounded-3xl"
                src="/assets/artem_baby.jpeg"
                alt="artem"
              />
            </div>
          </div>

          <hr className="border-accent-1 border-2 w-11/12 m-auto md:w-full md:m-0" />

          <div className="md:flex py-16 md:justify-between text-xl w-11/12 m-auto md:w-full md:m-0">
            <div className="md:w-4/12 w-8/12 m-auto md:m-0 mb-10">
              <img
                className="rounded-3xl"
                src="/assets/laptop.jpeg"
                alt="laptop"
              />
            </div>
            <div className="md:w-6/12 mt-10 md:mt-0 self-center">
              <h3 className="text-4xl mb-5">Web Development</h3>
              <p className="mb-5">
                Also known as website development, refers to the tasks
                associated with creating, building, and maintaining websites and
                web applications that run online on a browser. It may, however,
                also include web design, web programming, and database
                management.
              </p>
              <p className="mb-10">
                I like to use modern instruments for web development, and I
                gladly would talk to you about your project from an existing one
                or brand new from scratch 😉
              </p>
              <div className="flex">
                <Link scroll={false} href="/contact">
                  <a className="text-lg text-white bg-accent-3 p-3 rounded-lg w-5/12 text-center">
                    Contact me
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <hr className="border-accent-1 border-2 w-11/12 m-auto md:w-full md:m-0" />

          <div className="md:flex py-16 md:justify-between text-xl w-11/12 m-auto md:w-full md:m-0">
            <div className="w-8/12 m-auto md:hidden mb-10">
              <img
                className="rounded-3xl"
                src="/assets/kali.jpeg"
                alt="artem"
              />
            </div>
            <div className="md:w-6/12 self-center">
              <h3 className="text-4xl mb-5">Cyber Security</h3>
              <p className="mb-5">
                Like many people I don't like to be scammed. The reason I am
                passionate about cyber security is helping a good society from
                bad guys. Security nowadays is fragile and I can and will make
                it solid.
              </p>
              <p className="mb-10">
                Analyze, investigate, respond, and recover from/to cybersecurity
                incidents, events, and threats as per the incident response
                lifecycle. Remediate infrastructure vulnerabilities and guide
                engineering teams to take preventative measures
              </p>
              <div className="flex">
                <Link scroll={false} href="/contact">
                  <a className="text-lg text-white bg-accent-3 p-3 rounded-lg w-5/12 text-center">
                    Contact me
                  </a>
                </Link>
              </div>
            </div>
            <div className="hidden md:block md:w-4/12">
              <img
                className="rounded-3xl"
                src="/assets/kali.jpeg"
                alt="artem"
              />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default About;
