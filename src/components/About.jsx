import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-20 h-20 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

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

      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
