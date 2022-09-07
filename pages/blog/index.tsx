import Container from "../../components/container";
import Posts from "../../components/posts";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/api";
import axios from "axios";
import Head from "next/head";
import Post from "../../types/post";
import { all } from "remark-rehype";

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
  const res = await axios.get(
    "https://dev.to/api/articles?username=northwillov"
  );

  const getPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  const allPosts = getPosts.map((post, idx) => {
    return {
      ...post,
      likes: res.data[idx].public_reactions_count,
      comments: res.data[idx].comments_count,
    };
  });

  return {
    props: { allPosts },
  };
};
