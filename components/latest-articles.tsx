import React from "react";
import DateFormatter from "../components/date-formatter";
import Link from "next/link";
import PostType from "../types/post";
import Heart from "./svg/heart";
import Comment from "./svg/comment";

type Props = {
  latestPost: PostType;
  secondPost: PostType;
};

const LatestArticles = ({ latestPost, secondPost }: Props) => {
  return (
    <div>
      <h1 className="text-center text-5xl pt-16 pb-20">Latest Articles</h1>
      <div className="md:flex md:justify-between pb-20">
        <div className="w-10/12 md:w-6/12 md:mr-5 m-auto">
          <img src={latestPost.coverImage} alt="latestpost" />
        </div>

        <div className="flex flex-col justify-between mt-0 md:ml-5 md:w-6/12 w-10/12 text-left md:m-0 m-auto mt-8 md:mt-0">
          <div>
            <h2 className="text-3xl mb-3">{latestPost.title}</h2>
            <p className="mb-3">{latestPost.excerpt}</p>
            <DateFormatter dateString={latestPost.date} />
          </div>

          <div className="flex justify-between mt-7">
            <Link scroll={false} href={`/blog/${latestPost.slug}`}>
              <a className="text-lg text-white bg-accent-3 p-3 rounded-lg">
                Read more
              </a>
            </Link>
            <div className="ml-10 flex items-center">
              <Heart />
              <span className="ml-1">{latestPost.likes}</span>
              <Comment />
              <span className="ml-1">{latestPost.comments}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:justify-between pb-20">
        <div className="md:hidden w-10/12 md:w-6/12 md:mr-5 m-auto">
          <img src={secondPost.coverImage} alt="latestpost" />
        </div>

        <div className="flex flex-col justify-between mt-0 md:mr-5 md:w-6/12 w-10/12 text-left md:text-right md:m-0 m-auto mt-8 md:mt-0">
          <div>
            <h2 className="text-3xl mb-3">{secondPost.title}</h2>
            <p className="mb-3">{secondPost.excerpt}</p>
            <DateFormatter dateString={secondPost.date} />
          </div>

          <div className="flex justify-between items-center mt-7">
            <div className="md:ml-10 flex items-center">
              <Heart />
              <span className="ml-1">{secondPost.likes}</span>
              <Comment />
              <span className="ml-1">{secondPost.comments}</span>
            </div>
            <Link scroll={false} href={`/blog/${secondPost.slug}`}>
              <a className="text-lg text-white bg-accent-3 p-3 rounded-lg">
                Read more
              </a>
            </Link>
          </div>
        </div>
        <div className="hidden md:block w-6/12 ml-5">
          <img src={secondPost.coverImage} alt="latestpost" />
        </div>
      </div>
      <div className="flex justify-center mb-20 mt-5">
        <Link scroll={false} href={`/blog`}>
          <a className="text-lg text-white bg-accent-3 px-10 py-3 rounded-lg">
            Read more Articles
          </a>
        </Link>
      </div>
    </div>
  );
};

export default LatestArticles;
