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
      className="flex flex-col justify-center items-center font-spacegrotesk bg-slate-800 text-center rounded-lg my-2 mx-6 py-6 px-10 shadow-lg"
      whileHover={{
        scale: 1.025,
      }}
    >
      <blockquote className="text-sm md:text-lg mb-2 font-medium text-white">
        <p>{`"${comment}"`}</p>
      </blockquote>
      <h5 className="text-lg text-cyan-400">{name}</h5>
      <p className="text-base font-medium text-blue-600">{`${job}, ${company}`}</p>
    </motion.div>
  );
};

export default UserComments;
