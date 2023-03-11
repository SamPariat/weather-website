import React, { Fragment } from "react";

type HeadlineTextProps = {
  subHeading?: string;
  text: string;
};

const HeadlineText = ({ subHeading, text }: HeadlineTextProps) => {
  return (
    <Fragment>
      <h2 className="text-textColor text-4xl font-spacegrotesk font-semibold mt-6 mb-3 underline">
        {subHeading}
      </h2>
      <h5 className="text-textColor text-lg font-spacegrotesk font-medium my-3">
        {text}
      </h5>
    </Fragment>
  );
};

export default HeadlineText;
