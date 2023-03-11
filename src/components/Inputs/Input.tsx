import React, { Fragment } from "react";

type InputProps = {
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ setCity }: InputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setCity(event.target.value);

  return (
    <Fragment>
      <input
        type="text"
        placeholder="-- Enter a City --"
        onChange={handleChange}
        className="my-4 px-2 py-2 text-center text-lg font-spacegrotesk rounded-lg bg-transparent text-textColor placeholder:text-textColor border-b-2 border-secondaryColor focus:border-y-2 focus:outline-none"
      />
    </Fragment>
  );
};

export default Input;
