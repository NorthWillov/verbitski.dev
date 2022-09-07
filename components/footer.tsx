const Footer = () => {
  return (
    <footer className="bg-accent-4 text-accent-5 text-center pb-20">
      <div className="flex justify-center pt-16 pb-2">
        <a
          className="mr-2"
          href="https://www.instagram.com/artemverbytskyi"
          target="_blank"
        >
          <i className="fa-brands fa-instagram text-5xl"></i>
        </a>
        <a className="mr-2" href="https://dev.to/northwillov" target="_blank">
          <i className="fa-brands fa-dev text-5xl"></i>
        </a>
        <a
          className="mr-2"
          href="https://www.linkedin.com/in/artemverbytskyi"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin text-5xl"></i>
        </a>
        <a href="https://github.com/NorthWillov" target="_blank">
          <i className="fa-brands fa-github text-5xl"></i>
        </a>
      </div>
      <span>© 2022 Artem Verbitski</span>
    </footer>
  );
};

export default Footer;
