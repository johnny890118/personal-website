import { motion } from "framer-motion";
import Image from "next/image";

const UiComponentsShow = ({
  portfolioName,
  portfolioURL,
  portfolioImg,
  order,
}) => {
  return (
    <motion.a
      target="_blank"
      href={`${portfolioURL}`}
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: "spring",
        delay: order * 0.3,
      }}
      className="mx-2 mb-5 flex size-[21rem] flex-col justify-between rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-10 p-8 backdrop-blur-md backdrop-filter"
    >
      <div>
        <Image alt="" src={portfolioImg} width={500} height={500} />
      </div>
      <div className="text-center">{portfolioName}</div>
    </motion.a>
  );
};

export default UiComponentsShow;
