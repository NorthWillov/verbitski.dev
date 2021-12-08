import PostPreview from "./post-preview"
import Post from "../types/post"

type Props = {
  posts: Post[]
}

const Posts = ({ posts }: Props) => {
  return (
    <section>
      <h1 className="text-3xl text-center my-10">Blogs</h1>
      <div className="">
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
      </div>
    </section>
  )
}

export default Posts
