import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  likes: number;
  comments: number;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  likes,
  comments,
}: Props) => {
  return (
    <div className="md:flex md:justify-between py-20">
      <div className="md:w-6/12 w-9/12 m-auto md:m-0 md:mr-5">
        <img src={coverImage} alt="latestpost" />
      </div>

      <div className="md:w-6/12 w-9/12 m-auto md:m-0 mt-8 md:mt-0 flex flex-col md:justify-between md:ml-5">
        <div>
          <h2 className="text-3xl mb-3">{title}</h2>
          <p className="mb-3 text-xl">{excerpt}</p>
          <DateFormatter dateString={date} />
        </div>

        <div className="flex justify-between items-center mt-8 md:mt-0">
          <Link href={`/blog/${slug}`}>
            <a className="text-lg text-white bg-accent-3 p-3 rounded-lg">
              Read more
            </a>
          </Link>
          <div className="ml-10 flex items-center">
            <svg
              id="Layer_1"
              data-name="Layer 1"
              width="18px"
              height="18px"
              viewBox="0 0 122.88 107.39"
              fill="red"
            >
              <path d="M60.83,17.18c8-8.35,13.62-15.57,26-17C110-2.46,131.27,21.26,119.57,44.61c-3.33,6.65-10.11,14.56-17.61,22.32-8.23,8.52-17.34,16.87-23.72,23.2l-17.4,17.26L46.46,93.55C29.16,76.89,1,55.92,0,29.94-.63,11.74,13.73.08,30.25.29c14.76.2,21,7.54,30.58,16.89Z" />
            </svg>
            <span className="ml-1">{likes}</span>
            <svg
              id="Layer_1"
              data-name="Layer 1"
              fill="#3A3A3A"
              width="14px"
              height="14px"
              viewBox="0 0 121.83 122.88"
              className="ml-3"
            >
              <path d="M55.05,97.68l-24.9,23.88a3.95,3.95,0,0,1-6.89-2.62V97.68H10.1A10.16,10.16,0,0,1,0,87.58V10.1A10.18,10.18,0,0,1,10.1,0H111.73a10.16,10.16,0,0,1,10.1,10.1V87.58a10.16,10.16,0,0,1-10.1,10.1ZM27.53,36.61a3.94,3.94,0,0,1,0-7.87H94.3a3.94,3.94,0,1,1,0,7.87Zm0,25.55a3.94,3.94,0,0,1,0-7.87H82a3.94,3.94,0,0,1,0,7.87Z" />
            </svg>
            <span className="ml-1">{comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostPreview;
