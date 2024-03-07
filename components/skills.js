import SkillsShow from "./skillsShow";

const Skills = () => {
  return (
    <div className="h-auto pt-28 text-black">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <p className="mb-5 border-b-4 border-cyan-400 text-center text-2xl font-bold">
          技能
        </p>
        <div className="flex w-[90%] flex-wrap items-center justify-center p-12 md:w-3/4">
          <SkillsShow skillName={"JavaScript"} skillPercent={80} />
          <SkillsShow skillName={"React"} skillPercent={60} />
          <SkillsShow skillName={"Next.JS"} skillPercent={50} />
          <SkillsShow skillName={"Tailwind"} skillPercent={70} />
          <SkillsShow skillName={"SCSS"} skillPercent={80} />
          <SkillsShow skillName={"Python"} skillPercent={70} />
          <SkillsShow skillName={"C++"} skillPercent={40} />
          <SkillsShow skillName={"Git"} skillPercent={70} />
        </div>
      </div>
    </div>
  );
};

export default Skills;
