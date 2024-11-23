import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <div className= "lg:grid lg:grid-cols-3 lg:divide-x-0">
        <motion.div variants={textVariant()}
          className='col-span-2'>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>About me.</h2>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 pr-4 col-span-2 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            <p>I am a former engineering consultant with 5 years of experience in the
              fire engineering industry. I am currently studying Integrated Engineering
              at the University of British Columbia with a specialization in
              computer and mechanical engineering.</p>
            <br></br>
            <p>I am passionate about software development and
              looking to build my skills as a developer.  Here are some areas of interest
              that I have explored through my projects and work experience.</p>
          </motion.p>
        </motion.div>
        <motion.div
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 pl-4'
        >
            <motion.img
              src="https://avatars.githubusercontent.com/u/77314661?v=4"
              alt="profile"
              variants={fadeIn("", "", 0.1, 1)}
              className="w-[300] h-[300] hidden lg:block rounded-full object-contain"
            />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
