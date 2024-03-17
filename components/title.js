import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const Title = () => {
  const [contact] = useState([
    { src: "/line.png" },
    { src: "/email.png" },
    { src: "/facebook.png" },
    { src: "/instagram.png" },
  ]);

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{
        type: "tween",
        duration: 1.5,
        ease: "easeInOut",
      }}
      className="flex h-dvh items-center justify-center"
      id="home"
    >
      <div className="flex h-[80%] w-[90%] flex-col items-center justify-center overflow-hidden rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-10 backdrop-blur-md backdrop-filter md:h-[80%] md:w-[90%] md:flex-row xl:w-[70%]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="flex h-full w-full items-center justify-start pl-4 md:w-1/2 md:justify-end"
        >
          <div className="md:w-[255px] lg:w-[418px]">
            <div className="flex items-center space-x-2">
              <div className="h-1 w-5 bg-pink-500"></div>
              <p className="handwriting my-5 text-xs font-bold text-black md:text-base">
                WELCOME TO MY WORLD
              </p>
            </div>
            <p className="handwriting mb-5 text-3xl font-bold text-black md:text-4xl lg:text-6xl">
              哈囉！
            </p>
            <p className="handwriting text-3xl font-bold text-black md:text-4xl lg:text-6xl">
              {"我是 "}
              <span className="typewriter thick text-3xl font-bold text-violet-600 md:text-4xl lg:text-6xl"></span>
            </p>
            <div className="mt-5 flex space-x-5 md:mt-10">
              {contact.map((item, index) => (
                <button key={index}>
                  <Image
                    alt=""
                    src={item.src}
                    width={32}
                    height={32}
                    className="h-6 w-6 md:h-8 md:w-8"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "tween",
            duration: 1,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="flex h-full w-full items-start justify-center md:w-1/2 md:items-center md:justify-center"
        >
          <Image
            alt=""
            src={"/me2.jpg"}
            width={400}
            height={400}
            className="w-56 rounded-[40px] shadow-xl xl:w-80"
            priority={true}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Title;
