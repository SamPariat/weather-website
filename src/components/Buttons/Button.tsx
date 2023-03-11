import React, { Fragment } from "react";

type ButtonProps = {
  buttonTitle: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ buttonTitle, onClick }: ButtonProps) => {
  return (
    <Fragment>
      <span className="font-spacegrotesk font-normal uppercase text-textColor text-base align-middle text-center">
        <button
          className="rounded-md bg-primaryColor px-5 py-2 cursor-pointer"
          onClick={onClick}
        >
          {buttonTitle}
        </button>
      </span>
    </Fragment>
  );
};

export default Button;
