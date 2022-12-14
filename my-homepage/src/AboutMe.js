import React from "react";
import {FaRegSmileBeam} from "react-icons/fa";

function AboutMe() {
  return (
    <div>
      <div className="container heading about-heading">
        <h2>A Little About Myself</h2>
        <h2 className="icon">
          <FaRegSmileBeam />
        </h2>
      </div>
      <article className="about-article">
        <img
          src="/images/IMG-20191214-WA0011.jpeg"
          className="image"
          alt="Myself"
        />
        <p>
          Where do I start, I am a bubbly person who loves to strike up a
          conversation and learn from people all around me. I have been in the
          printing industry and worked in all departments of the business. In my
          current role, I have gained experience in telephonic, writing and
          verbal communication, planning, maintaining and recording records. I
          learnt many soft and technical skills I can carry throughout my
          career. In 2019 I started self-taught coding as I was hoping to learn
          a new skill. This is when I found CodeYourFuture where I did a
          Full-Stack Web Development course and graduated in 2021. What made it
          an amazing course for me is, it was project-based learning. I am a
          lover of learning and this is what attracted me most to train to
          become a developer as you are always challenged to think out of the
          box and learn new things daily. I was also recognized as the
          <b className="bold">strongest communicator and most curious</b>{" "}
          trainee in my class.
        </p>
      </article>
    </div>
  );
}

export default AboutMe;
