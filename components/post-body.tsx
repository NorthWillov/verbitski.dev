import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto py-5 px-5 md:px-10 bg-white rounded-3xl mt-10">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <p className="text-center mt-20">
        Like and comment this arcticle on{" "}
        <a
          className="text-blue-500"
          href="https://dev.to/northwillov"
          target="_blank"
        >
          dev.to
        </a>
      </p>
    </div>
  );
};

export default PostBody;
