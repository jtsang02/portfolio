import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My tech stack</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          These are the technologies and languages that I've used on my projects.
        </motion.p>
      </div>

      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
        {technologies.map((technology) => (
          <a ref={technology.ref} key={technology.name} href={technology.link} target='_blank' rel='noreferrer'>
            <div
              className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
              key={technology.name}>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-20 mx-auto'
                href={technology.link}
              />
              <p className='my-4'>{technology.name}</p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
