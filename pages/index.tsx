import React, { useEffect, useState } from "react";
import Container from "../components/container";
import Layout from "../components/layout";
import Slider from "../components/slider";
import Head from "next/head";
import ContactForm from "../components/contact-form";
import { getAllPosts } from "../lib/api";
import Post from "../types/post";
import VideoBg from "../components/video-bg";
import FirstIntro from "../components/first-intro";
import LatestArticles from "../components/latest-articles";
import LatestProject from "../components/latest-project";
import ReactGA from "react-ga4";

type Props = {
  latestPost: Post;
  secondPost: Post;
};

const Index = ({ latestPost, secondPost }: Props) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!);
  }, []);

  return (
    <Layout>
      <Head>
        <title>Verbitski | Software Developer</title>
      </Head>
      {windowWidth > 992 && <VideoBg />}
      <section className="bg-accent-2 text-5xl pt-10 lg:pt-0">
        <Container>
          <FirstIntro />
        </Container>
      </section>
      <Slider />
      <section className="blue-bg text-white">
        <div className="relative">
          <Container>
            <LatestArticles latestPost={latestPost} secondPost={secondPost} />
            <hr className="w-10/12 m-auto md:w-full md:m-0" />
            {/* **Projects are outdated** UPDATE REQUIRE */}
            {/* <LatestProject />
            <hr className="w-10/12 m-auto md:w-full md:m-0" /> */}
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
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  let articles: { public_reactions_count: number; comments_count: number }[] = [];

  try {
    const res = await fetch("https://dev.to/api/articles?username=northwillov");
    if (!res.ok) throw new Error(`dev.to API responded with ${res.status}`);
    articles = await res.json();
  } catch (err) {
    console.error("Failed to fetch dev.to articles:", err);
  }

  return {
    props: {
      latestPost: {
        likes: articles[0]?.public_reactions_count ?? 0,
        comments: articles[0]?.comments_count ?? 0,
        ...allPosts[0],
      },
      secondPost: {
        likes: articles[1]?.public_reactions_count ?? 0,
        comments: articles[1]?.comments_count ?? 0,
        ...allPosts[1],
      },
    },
  };
};
