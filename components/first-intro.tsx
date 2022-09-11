import React from "react";
import Link from "next/link";

const FirstIntro = () => {
  return (
    <div className="md:flex md:justify-between py-14 text-center md:text-left">
      <img
        className="md:hidden h-48 md:h-96 rounded-full self-center mt-5 mb-5 md:mt-0 m-auto"
        src="/assets/blog/authors/me.jpeg"
        alt="artem"
      />
      <div className="md:w-3/6 text-black">
        <h1>Artem Verbitski</h1>
        <p className="text-lg">Software Engineer</p>
        <p className="text-lg mt-5 mb-3 md:w-full w-11/12 m-auto md:m-0 text-left">
          Hi there 👋 I am a software engineer with hands-on to build
          user-friendly and professional looking sites. I have knowledge to
          solve a problem across many mediums and especially adept at taking an
          already existed project to the next level. With every project I aim to
          make the user experience intuitive and easy to follow for any level of
          user. I look forward to using my skills as a developer and designer as
          part of a quality-driven team to build easy-to-use and professional
          looking sites.
        </p>
        <Link scroll={false} href="/about">
          <a className="text-lg text-white bg-accent-3 p-3 rounded-lg">
            Learn more about me
          </a>
        </Link>
      </div>
      <img
        className="hidden md:block h-48 md:h-96 rounded-full self-center mt-10 md:mt-0 m-auto"
        src="/assets/blog/authors/me.jpeg"
        alt="artem"
      />
    </div>
  );
};

export default FirstIntro;
