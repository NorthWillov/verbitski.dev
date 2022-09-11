import PostPreview from "./post-preview";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <section className="text-black">
      <h1 className="text-7xl md:text-8xl w-11/12 m-auto md:w-full md:m-0 pt-20 ">
        Blog
      </h1>

      <div>
        {posts.map((post) => (
          <div key={post.slug}>
            <hr className="border-accent-1 border-2 w-11/12 m-auto md:w-full md:m-0" />

            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              likes={post.likes}
              comments={post.comments}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Posts;
