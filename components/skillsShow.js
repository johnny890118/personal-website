import { motion } from "framer-motion";
const SkillsShow = ({ skillName, skillPercent, order, color }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          delay: order * 0.15,
        }}
        className="m-4 flex size-48 flex-col items-center justify-evenly rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-10 font-bold backdrop-blur-md backdrop-filter"
      >
        <div
          className={`radial-progress ${color}`}
          style={{ "--value": skillPercent }}
          role="progressbar"
        >
          {`${skillPercent}%`}
        </div>
        <div>{skillName}</div>
      </motion.div>
    </>
  );
};

export default SkillsShow;
