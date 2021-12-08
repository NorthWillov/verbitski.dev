import Avatar from "./avatar"
import DateFormatter from "./date-formatter"
import CoverImage from "./cover-image"
import Link from "next/link"
import Author from "../types/author"

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
}

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div className="flex border border-black bg-white p-5 m-5 rounded-lg">
      <div className="w-5/12">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="w-5/12 pl-10">
        <h3 className="text-3xl mb-3 leading-snug">
          <Link as={`/blog/${slug}`} href="/blog/[slug]">
            <a className="hover:underline">{title}</a>
          </Link>
        </h3>
        <div className="text-lg mb-4">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  )
}

export default PostPreview
