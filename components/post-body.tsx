import markdownStyles from "./markdown-styles.module.css"

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-4xl mx-auto border border-black bg-white p-5 rounded-md">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
