import Avatar from './avatar'
import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import Author from '../types/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <hr className="border-accent-1 border-2 w-11/12 m-auto md:w-full md:m-0" />
      <div className="mb-8 md:mb-16 p-5 mt-10 flex justify-center">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl md:ml-24 ml-10">
        <div className="mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
