import Container from "../../components/container";
import Posts from "../../components/posts";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import Post from "../../types/post";

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Head>
        <title>Verbitski | Software Developer</title>
      </Head>
      <div className="paper-bg mt-16">
        <Container>
          {allPosts.length > 0 && <Posts posts={allPosts} />}
        </Container>
      </div>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const getPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  let articles: { public_reactions_count: number; comments_count: number }[] = [];

  try {
    const res = await fetch("https://dev.to/api/articles?username=northwillov");
    if (!res.ok) throw new Error(`dev.to API responded with ${res.status}`);
    articles = await res.json();
    console.log("Fetched dev.to articles:", articles);
  } catch (err) {
    console.error("Failed to fetch dev.to articles:", err);
  }

  const allPosts = getPosts.map((post, idx) => ({
    ...post,
    likes: articles[idx]?.public_reactions_count ?? 0,
    comments: articles[idx]?.comments_count ?? 0,
  }));

  return {
    props: { allPosts },
  };
};
