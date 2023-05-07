import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section className={`flex flex-col w-full h-screen mx-auto`}>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#7d97b0]'>Josiah</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm an Engineering student at the University of British Columbia
            who enjoys building software.  I'm also a fan of science fiction.
          </p>
        </div>
      </div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='absolute inset-1 top-[360px] md:h-[435px] h-[420px]'
      >
        <EarthCanvas />
      </motion.div>

      <div className='mt-auto mb-10 flex flex-wrap w-full justify-center items-center'>
        <Link className='cursor-pointer' to='about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
