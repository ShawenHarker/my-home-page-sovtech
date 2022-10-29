import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div>
      <a
        href="https://www.github.com/shawenharker"
        rel="noopener noreferrer"
        aria-label="Github"
        target="_blank"
      >
        <FaGithubSquare />
      </a>
      <a
        href="https://www.linkedin.com/in/shawen-harker"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        target="_blank"
      >
        <RiLinkedinBoxFill />
      </a>
    </div>
  );
};

export default Footer;
