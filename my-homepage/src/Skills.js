import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3 } from "react-icons/tb";
import { GiWireframeGlobe } from "react-icons/gi";
import { CiMobile4 } from "react-icons/ci";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbBrandBootstrap } from "react-icons/tb";
import { SiMaterialui } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { RiUbuntuLine } from "react-icons/ri";

const Skills = () => {
  return (
    <div>
      <h2>My Skills</h2>
      <div>
        <h3>Technical Skills</h3>
        <uL>
          <li>
            <AiOutlineHtml5 />
            HTML5 & <TbBrandCss3 />
            CSS3
          </li>
          <li>
            <GiWireframeGlobe />
            Wireframing
          </li>
          <li>
            <CiMobile4 />
            Mobile first
          </li>
          <li>
            <IoLogoJavascript />
            JavaScript
          </li>
          <li>
            <FaReact />
            React.js
          </li>
          <li>
            <SiExpress />
            Node.js - Express
          </li>
          <li>
            <TbBrandBootstrap />
            Bootstrap
          </li>
          <li>
            <SiMaterialui />
            Material UI
          </li>
          <li>
            <DiPostgresql />
            Postgres SQL
          </li>
          <li>
            <RiUbuntuLine />
            Linux - Ubuntu
          </li>
        </uL>
      </div>
      <div>
        <h3>Soft Skills</h3>
        <uL>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Agile methodology</li>
          <li>Problem-solving</li>
          <li>Attention to detail</li>
          <li>Quality Assessor</li>
          <li>Time Management</li>
          <li>Leadership</li>
          <li>Fast Learner</li>
          <li>Working under pressure</li>
        </uL>
      </div>
    </div>
  );
};

export default Skills;
