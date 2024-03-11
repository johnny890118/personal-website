import { motion } from "framer-motion";
import SkillsShow from "./skillsShow";

const Skills = () => {
  const skillsCards = [
    { name: "JavaScript", percent: 80 },
    { name: "React", percent: 60 },
    { name: "Next.JS", percent: 50 },
    { name: "Tailwind", percent: 70 },
    { name: "SCSS", percent: 70 },
    { name: "Python", percent: 70 },
    { name: "C++", percent: 40 },
    { name: "Git", percent: 70 },
    { name: "MSSQL", percent: 50 },
  ];
  return (
    <div className="h-auto pt-28 font-bold text-black" id="skills">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
          }}
          className="mb-5 border-b-4 border-cyan-400 text-center text-2xl"
        >
          技能
        </motion.p>
        <div className="flex w-[90%] max-w-[1370px] flex-wrap items-center justify-center md:w-[90%]">
          {skillsCards.map((items, index) => (
            <SkillsShow
              key={index}
              skillName={items.name}
              skillPercent={items.percent}
              order={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
