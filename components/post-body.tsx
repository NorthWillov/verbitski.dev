import markdownStyles from "./markdown-styles.module.css"

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="mx-auto py-5 px-5 md:px-10 bg-white rounded-3xl mt-10">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
