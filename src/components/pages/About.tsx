import React from "react";

import Framework from "../Cards/Framework";
import HeadingText from "../Texts/HeadingText";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeadingText heading="All Languages & Frameworks Used" />
      <Framework />
    </div>
  );
};

export default About;
