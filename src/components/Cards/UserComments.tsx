import React from "react";
import { motion } from "framer-motion";

type UserCommentsProps = {
  name: string;
  comment: string;
  job: string;
  company: string;
};

const UserComments = ({ comment, company, job, name }: UserCommentsProps) => {
  return (
    <motion.div
      className="flex flex-col justify-center font-spacegrotesk bg-secondaryColor text-textColor text-center rounded-lg my-2 mx-6 py-6 px-10"
      whileHover={{
        scale: 1.05,
      }}
    >
      <blockquote className="text-lg mb-2 font-medium">
        <p>{`"${comment}"`}</p>
      </blockquote>
      <h5 className="text-base font-medium">{name}</h5>
      <p className="text-base font-normal">{`${job}, ${company}`}</p>
    </motion.div>
  );
};

export default UserComments;
