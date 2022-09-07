import PostPreview from "./post-preview";
import Post from "../types/post";

type Props = {
  posts: Post[];
};

const Posts = ({ posts }: Props) => {
  return (
    <section>
      <h1 className="text-8xl pt-20">Blog</h1>

      <div>
        {posts.map((post) => (
          <div key={post.slug}>
            <hr className="border-accent-1 border-2" />

            <PostPreview
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
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
