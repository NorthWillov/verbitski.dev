import PostPreview from "./post-preview"
import Post from "../types/post"

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <section>
      <h1 className="text-3xl text-center my-10">Blogs</h1>

      <iframe
        src="https://giphy.com/embed/iG9uMrCoVtN2IIjlzw"
        width="100%"
        height="100%"
        frameBorder="0"
        className="giphy-embed pt-20"
        allowFullScreen
      />

      <h2 className="text-xl text-center">Coming soon...</h2>

      {/* <div className="">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div> */}
    </section>
  )
}

export default Posts
