import React, { useEffect, useState } from "react";
import Container from "../components/container";
import DateFormatter from "../components/date-formatter";
import Layout from "../components/layout";
import Slider from "../components/slider";
import Link from "next/link";
import Head from "next/head";
import ContactForm from "../components/contact-form";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import axios from "axios";

type Props = {
  latestPost: Post;
  secondPost: Post;
};

const Index = ({ latestPost, secondPost }: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Verbitski | Software Developer</title>
      </Head>
      {windowWidth > 992 && (
        <header className="mt-16 relative flex items-center justify-center h-96 overflow-hidden bg-black">
          <div className="relative z-20 p-5 text-6xl text-white rounded-xl">
            Web Development & Cyber Security
          </div>
          <video autoPlay loop muted className="absolute z-10 opacity-60">
            <source src="/assets/dna.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </header>
      )}
      <section className="bg-accent-2 text-5xl pt-10 lg:pt-0">
        <Container>
          <div className="md:flex md:justify-between py-14 text-center md:text-left">
            <img
              className="md:hidden h-48 md:h-96 rounded-full self-center mt-5 mb-5 md:mt-0 m-auto"
              src="/assets/blog/authors/me.jpeg"
              alt="artem"
            />
            <div className="md:w-3/6 text-black">
              <h1>Artem Verbitski</h1>
              <p className="text-lg">Software Engineer</p>
              <p className="text-lg mt-5 mb-3 md:w-full w-11/12 m-auto md:m-0 text-left">
                Hi there 👋 I am a software engineer with hands-on to build
                user-friendly and professional looking sites. I have knowledge
                to solve a problem across many mediums and especially adept at
                taking an already existed project to the next level. With every
                project I aim to make the user experience intuitive and easy to
                follow for any level of user. I look forward to using my skills
                as a developer and designer as part of a quality-driven team to
                build easy-to-use and professional looking sites.
              </p>
              <Link scroll={false} href="/about">
                <a className="text-lg text-white bg-accent-3 p-3 rounded-lg">
                  Learn more about me
                </a>
              </Link>
            </div>
            <img
              className="hidden md:block h-48 md:h-96 rounded-full self-center mt-10 md:mt-0 m-auto"
              src="/assets/blog/authors/me.jpeg"
              alt="artem"
            />
          </div>
        </Container>
      </section>
      <Slider />
      <section className="blue-bg text-white">
        <div className="relative">
          <Container>
            <h1 className="text-center text-5xl pt-16 pb-20">
              Latest Articles
            </h1>
            <div className="md:flex md:justify-between pb-20">
              <div className="w-10/12 md:w-6/12 md:mr-5 m-auto">
                <img src={latestPost.coverImage} alt="latestpost" />
              </div>

              <div className="flex flex-col justify-between mt-0 md:ml-5 md:w-6/12 w-10/12 text-left md:m-0 m-auto mt-8 md:mt-0">
                <div>
                  <h2 className="text-3xl mb-3">{latestPost.title}</h2>
                  <p className="mb-3">{latestPost.excerpt}</p>
                  <DateFormatter dateString={latestPost.date} />
                </div>

                <div className="flex justify-between mt-7">
                  <Link scroll={false} href={`/blog/${latestPost.slug}`}>
                    <a className="text-lg text-white bg-accent-3 p-3 rounded-lg">
                      Read more
                    </a>
                  </Link>
                  <div className="ml-10 flex items-center">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      width="18px"
                      height="18px"
                      viewBox="0 0 122.88 107.39"
                      fill="red"
                    >
                      <path d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z" />
                    </svg>
                    <span className="ml-1">{latestPost.likes}</span>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      fill="#FFF"
                      width="14px"
                      height="14px"
                      viewBox="0 0 121.83 122.88"
                      className="ml-3"
                    >
                      <path d="M55.05,97.68l-24.9,23.88a3.95,3.95,0,0,1-6.89-2.62V97.68H10.1A10.16,10.16,0,0,1,0,87.58V10.1A10.18,10.18,0,0,1,10.1,0H111.73a10.16,10.16,0,0,1,10.1,10.1V87.58a10.16,10.16,0,0,1-10.1,10.1ZM27.53,36.61a3.94,3.94,0,0,1,0-7.87H94.3a3.94,3.94,0,1,1,0,7.87Zm0,25.55a3.94,3.94,0,0,1,0-7.87H82a3.94,3.94,0,0,1,0,7.87Z" />
                    </svg>
                    <span className="ml-1">{latestPost.comments}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex md:justify-between pb-20">
              <div className="md:hidden w-10/12 md:w-6/12 md:mr-5 m-auto">
                <img src={secondPost.coverImage} alt="latestpost" />
              </div>

              <div className="flex flex-col justify-between mt-0 md:mr-5 md:w-6/12 w-10/12 text-left md:text-right md:m-0 m-auto mt-8 md:mt-0">
                <div>
                  <h2 className="text-3xl mb-3">{secondPost.title}</h2>
                  <p className="mb-3">{secondPost.excerpt}</p>
                  <DateFormatter dateString={secondPost.date} />
                </div>

                <div className="flex justify-between items-center mt-7">
                  <div className="md:ml-10 flex items-center">
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      width="18px"
                      height="18px"
                      viewBox="0 0 122.88 107.39"
                      fill="red"
                    >
                      <path d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z" />
                    </svg>
                    <span className="ml-1">{secondPost.likes}</span>
                    <svg
                      id="Layer_1"
                      data-name="Layer 1"
                      fill="#FFF"
                      width="14px"
                      height="14px"
                      viewBox="0 0 121.83 122.88"
                      className="ml-3"
                    >
                      <path d="M55.05,97.68l-24.9,23.88a3.95,3.95,0,0,1-6.89-2.62V97.68H10.1A10.16,10.16,0,0,1,0,87.58V10.1A10.18,10.18,0,0,1,10.1,0H111.73a10.16,10.16,0,0,1,10.1,10.1V87.58a10.16,10.16,0,0,1-10.1,10.1ZM27.53,36.61a3.94,3.94,0,0,1,0-7.87H94.3a3.94,3.94,0,1,1,0,7.87Zm0,25.55a3.94,3.94,0,0,1,0-7.87H82a3.94,3.94,0,0,1,0,7.87Z" />
                    </svg>
                    <span className="ml-1">{secondPost.comments}</span>
                  </div>
                  <Link scroll={false} href={`/blog/${secondPost.slug}`}>
                    <a className="text-lg text-white bg-accent-3 p-3 rounded-lg">
                      Read more
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block w-6/12 ml-5">
                <img src={secondPost.coverImage} alt="latestpost" />
              </div>
            </div>
            <div className="flex justify-center mb-20 mt-5">
              <Link scroll={false} href={`/blog`}>
                <a className="text-lg text-white bg-accent-3 px-10 py-3 rounded-lg">
                  Read more Articles
                </a>
              </Link>
            </div>

            <hr className="w-10/12 m-auto md:w-full md:m-0" />

            <h1 className="text-center text-5xl pt-20 pb-20">Latest Project</h1>
            <div className="md:flex md:justify-between text-xl mb-20">
              <div className="md:w-5/12 w-3/6 m-auto">
                <img
                  src="/assets/projects/latest_project.png"
                  alt="latest_project"
                />
              </div>
              <div className="md:w-6/12 w-10/12 md:text-left m-auto mt-8 md:mt-0">
                <h2 className="text-4xl py-5">Pizzeria 'Riccardo'</h2>
                <p className="pb-5">
                  Full Stack Web Application for food delivery from 'Pizzeria &
                  Restaurant - Riccardo' 👨🏻‍
                </p>
                <div>
                  <h3>Technologies used:</h3>
                  <ul className="pb-5 pl-5 list-disc">
                    <li>React</li>
                    <li>Typescript</li>
                    <li>Bootstrap</li>
                    <li>MongoDB</li>
                    <li>Express.js</li>
                  </ul>
                </div>

                <div className="flex justify-between pb-5 mt-5 md:w-8/12">
                  <Link href="https://riccardopizzeria.herokuapp.com">
                    <a
                      target="_blank"
                      className="text-lg text-white bg-accent-3 p-3 rounded-lg w-3/6 mr-1 text-center"
                    >
                      <i className="fas fa-play"></i> Demo
                    </a>
                  </Link>
                  <Link href="https://github.com/NorthWillov/food_service">
                    <a
                      target="_blank"
                      className="text-lg text-white bg-accent-3 p-3 rounded-lg w-3/6 ml-1 text-center"
                    >
                      <i className="fab fa-github"></i> Source
                    </a>
                  </Link>
                </div>
                <div className="flex">
                  <Link scroll={false} href="/projects">
                    <a className="text-lg text-white bg-accent-3 p-3 rounded-lg md:w-8/12 w-full text-center">
                      Check all projects
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <hr className="w-10/12 m-auto md:w-full md:m-0" />

            <h1 className="text-center text-5xl pt-20">Contact me</h1>

            <ContactForm />

            <hr className="w-10/12 m-auto md:w-full md:m-0 pb-20" />
          </Container>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const res = await axios.get(
    "https://dev.to/api/articles?username=northwillov"
  );

  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: {
      latestPost: {
        likes: res.data[0].public_reactions_count,
        comments: res.data[0].comments_count,
        ...allPosts[0],
      },
      secondPost: {
        likes: res.data[1].public_reactions_count,
        comments: res.data[1].comments_count,
        ...allPosts[1],
      },
    },
  };
};
