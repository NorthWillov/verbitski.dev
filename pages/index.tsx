import Container from "../components/container"
import Posts from "../components/posts"
import Layout from "../components/layout"
import { getAllPosts } from "../lib/api"
import Head from "next/head"
import Post from "../types/post"

type Props = {
  allPosts: Post[]
}

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Verbitski | Software Developer</title>
        </Head>
        <Container>
          {allPosts.length > 0 && <Posts posts={allPosts} />}
        </Container>
      </Layout>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])

  return {
    props: { allPosts },
  }
}
