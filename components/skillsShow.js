import { motion } from "framer-motion";
const SkillsShow = ({ skillName, skillPercent, order }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          delay: order * 0.3,
        }}
        className="m-4 flex h-52 w-52 flex-col items-center justify-center rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-10 font-bold backdrop-blur-md backdrop-filter"
      >
        <div
          className="radial-progress text-violet-600"
          style={{ "--value": skillPercent }}
          role="progressbar"
        >
          {`${skillPercent}%`}
        </div>
        <div className="m-5">{skillName}</div>
      </motion.div>
    </>
  );
};

export default SkillsShow;
