import React from "react";
import {
  TbTools,
  TbBrandHtml5,
  TbBrandCss3,
  TbDeviceMobile,
  TbBrandJavascript,
  TbBrandReactNative,
  TbBrandBootstrap,
  TbBrandUbuntu
} from "react-icons/tb";
import { GiWireframeGlobe } from "react-icons/gi";
import { SiExpress, SiMaterialui } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";

const Skills = () => {
  return (
    <div>
      <div className="container heading skills">
        <h2>My Skills</h2>
        <h2 className="icon">
          <TbTools />
        </h2>
      </div>
      <div>
        <h3 className="sub-heading">Technical Skills</h3>
        <uL>
          <li>
            <TbBrandHtml5 className="skills-icon" />
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
            <TbDeviceMobile className="skills-icon" />
            Mobile first
          </li>
          <li>
            <TbBrandJavascript className="skills-icon" />
            JavaScript
          </li>
          <li>
            <TbBrandReactNative className="skills-icon" />
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
            <TbBrandUbuntu className="skills-icon" />
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
