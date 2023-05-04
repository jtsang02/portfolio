import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const GithubIcon = ({ link }) => {
  return (
  <div
    onClick={() => window.open(link, "_blank")}
    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
  >
    <img
      src={github}
      alt='source code'
      className='w-3/4 h-3/4 object-contain'
    />
  </div>
)};

const ProjectCard = ({
  index,
  name,
  description,
  date,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className='bg-tertiary flex flex-col p-5 rounded-2xl sm:w-[360px] w-full h-full hover:scale-110 duration-500'>
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-fit rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <div className=' text-white'>
            <div className='flow-root'>
              <span className='float-left font-bold text-[24px]'>{name}</span>
              <p className="float-right right-0">
                <GithubIcon link={source_code_link} />
              </p>
            </div>      
            <h3 className='mt-1 text-[14px]'>{date}</h3>
          </div>
          <p className='my-3 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-auto flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] bg-blue-700 px-2 py-1 rounded-xl`}
            >
              {tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are some of my projects that I have worked on recently. Feel free to reach out to me if you have
          any questions or would like to collaborate.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap justify-center gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
