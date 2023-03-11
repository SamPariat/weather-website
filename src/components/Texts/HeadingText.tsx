import React from "react";

type HeadingTextProps = {
  heading: string;
};

const HeadingText = ({ heading }: HeadingTextProps) => {
  return (
    <h1 className="font-spacegrotesk font-extrabold text-4xl sm:text-6xl text-textColor mt-8 mb-8">
      {heading}
    </h1>
  );
};

export default HeadingText;
