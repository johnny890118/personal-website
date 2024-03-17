import { motion } from "framer-motion";
import Image from "next/image";

const PortfolioShow = ({
  portfolioName,
  portfolioURL,
  portfolioImg,
  portfolioContent,
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
      className="mb-5 flex w-[90%] flex-col items-center justify-center rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-10 p-8 backdrop-blur-md backdrop-filter md:w-[70%]"
    >
      <div className="handwriting border-b-4 border-[#002fa7] text-center text-2xl">
        {portfolioName}
      </div>
      <br />
      <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
        <div className="mb-4 lg:mb-0">
          <Image
            alt=""
            src={portfolioImg}
            width={400}
            height={400}
            className="rounded-xl"
          />
        </div>
        <div className="lg:w-[55%] lg:pl-4">
          <div>{portfolioContent}</div>
        </div>
      </div>
    </motion.a>
  );
};

export default PortfolioShow;
