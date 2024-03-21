import { motion } from "framer-motion";
import SkillsShow from "./skillsShow";

const Skills = () => {
  const frontendSkills = [
    { name: "JavaScript", percent: 80 },
    { name: "React", percent: 65 },
    { name: "Next.JS", percent: 50 },
    { name: "Tailwind", percent: 70 },
    { name: "SCSS", percent: 70 },
    { name: "RWD", percent: 85 },
  ];
  const backendSkills = [
    { name: "Python", percent: 70 },
    { name: "C++", percent: 40 },
    { name: "Git", percent: 70 },
    { name: "MSSQL", percent: 50 },
  ];
  return (
    <div className="h-auto pt-[8vh] font-bold text-black xl:h-dvh" id="skills">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
          }}
          className="handwriting hight-light mb-5 text-center text-3xl"
        >
          技能
        </motion.p>
        <div className="flex w-[90%] flex-col items-center justify-between xl:flex-row">
          <div className="flex flex-col items-center justify-center xl:w-[52%]">
            <p className="handwriting text-center text-2xl">Front-End</p>
            <div className="flex max-w-[857px] flex-wrap items-center justify-center">
              {frontendSkills.map((items, index) => (
                <SkillsShow
                  key={index}
                  skillName={items.name}
                  skillPercent={items.percent}
                  order={index}
                  color={"text-violet-600"}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center xl:w-[46%]">
            <p className="handwriting text-center text-2xl">Back-End</p>
            <div className="flex max-w-[514px] flex-wrap items-center justify-center">
              {backendSkills.map((items, index) => (
                <SkillsShow
                  key={index}
                  skillName={items.name}
                  skillPercent={items.percent}
                  order={index}
                  color={"text-pink-600"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
