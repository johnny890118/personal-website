import { motion } from "framer-motion";
import Image from "next/image";

const UiComponentsShow = ({
  portfolioName,
  portfolioURL,
  portfolioImg,
  order,
  portfolioContent,
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
      className="mx-2 mb-5 flex size-72 flex-col justify-between rounded-xl border border-gray-100 bg-gray-400 bg-opacity-10 backdrop-blur-md backdrop-filter"
    >
      <div>
        <Image
          alt=""
          src={portfolioImg}
          width={500}
          height={500}
          className="rounded-t-xl"
        />
      </div>
      <div className="handwriting text-center text-2xl">{portfolioName}</div>
      <div className="mb-6 text-center">{portfolioContent}</div>
    </motion.a>
  );
};

export default UiComponentsShow;
