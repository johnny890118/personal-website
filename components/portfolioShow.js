import { motion } from "framer-motion";
import Image from "next/image";

const PortfolioShow = ({
  portfolioName,
  portfolioURL,
  portfolioImg,
  order,
}) => {
  return (
    <motion.a
      target="_blank"
      href={`${portfolioURL}`}
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        delay: order * 0.3,
      }}
      className="mb-5 flex w-[90%] flex-col rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-10 p-12 backdrop-blur-md backdrop-filter md:w-[70%] md:flex-row"
    >
      <div>
        <Image alt="" src={portfolioImg} width={400} height={400} />
      </div>
      <div className="flex-grow text-center">{portfolioName}</div>
    </motion.a>
  );
};

export default PortfolioShow;
