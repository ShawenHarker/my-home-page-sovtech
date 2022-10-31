import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

const Links = () => {
  return (
    <div className="container links">
      <a
        href="https://www.github.com/shawenharker"
        rel="noopener noreferrer"
        aria-label="Github"
        target="_blank"
        className="git"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://www.linkedin.com/in/shawen-harker"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        target="_blank"
        className="linkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  );
};

export default Links;
