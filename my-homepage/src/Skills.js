import React from "react";
import { VscTools } from "react-icons/vsc"
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandBootstrap } from "react-icons/tb";
import { GiWireframeGlobe } from "react-icons/gi";
import { CiMobile4 } from "react-icons/ci";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMaterialui } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { RiUbuntuLine } from "react-icons/ri";

const Skills = () => {
  return (
    <div>
      <div className="container heading skills">
        <h2>My Skills</h2>
        <h2 className="icon">
          <VscTools />
        </h2>
      </div>
      <div>
        <h3 className="sub-heading">Technical Skills</h3>
        <uL>
          <li>
            <AiOutlineHtml5 className="skills-icon" />
            HTML5
          </li>
          <li>
            <TbBrandCss3 className="skills-icon" />
            CSS3
          </li>
          <li>
            <GiWireframeGlobe className="skills-icon" />
            Wireframing
          </li>
          <li>
            <CiMobile4 className="skills-icon" />
            Mobile first
          </li>
          <li>
            <IoLogoJavascript className="skills-icon" />
            JavaScript
          </li>
          <li>
            <FaReact className="skills-icon" />
            React.js
          </li>
          <li>
            <SiExpress className="skills-icon" />
            Node.js - Express
          </li>
          <li>
            <TbBrandBootstrap className="skills-icon" />
            Bootstrap
          </li>
          <li>
            <SiMaterialui className="skills-icon" />
            Material UI
          </li>
          <li>
            <DiPostgresql className="skills-icon" />
            Postgres SQL
          </li>
          <li>
            <RiUbuntuLine className="skills-icon" />
            Linux - Ubuntu
          </li>
        </uL>
      </div>
      <div>
        <h3 className="sub-heading">Soft Skills</h3>
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
