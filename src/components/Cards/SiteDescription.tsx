import React, { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

import Button from "../Buttons/Button";

const readMoreVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

const SiteDescription = () => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const toggleHandler = () => setReadMore(!readMore);

  return (
    <motion.div className="flex flex-col">
      <motion.p
        className="font-spacegrotesk text-justify text-sm md:text-lg mb-8"
        variants={readMoreVariants}
      >
        A website that offers a range of features including a one day forecast,
        a five day forecast, a current forecast, and forecasts for up to 50
        cities.
        <AnimatePresence>
          {readMore && (
            <>
              The{" "}
              <span className="text-blue-400 font-bold">one day forecast</span>{" "}
              provides a detailed overview of the weather conditions for the
              upcoming 24 hours, while the{" "}
              <span className="text-blue-400 font-bold">five day forecast</span>{" "}
              gives users a broader perspective of what to expect in the coming
              days. The current forecast provides up-to-date information about
              the present weather conditions and alerts users about any
              potential weather hazards. Lastly, the{" "}
              <span className="text-blue-400 font-bold">
                forecasts for 50 cities
              </span>{" "}
              provide a comprehensive overview of the weather conditions in
              various locations, making it an ideal website for travelers and
              those who want to stay updated on weather patterns in different
              regions. Overall, this website is a valuable tool for anyone who
              wants to stay informed about the weather conditions in their city
              or any other location.
            </>
          )}
        </AnimatePresence>
      </motion.p>
      <Button
        buttonTitle={readMore ? "Read Less" : "Read More"}
        onClick={toggleHandler}
      />
    </motion.div>
  );
};

export default SiteDescription;
