import Image from "next/image";
import { useState } from "react";

const Title = () => {
  const [contact] = useState([
    { src: "/line.png" },
    { src: "/email.png" },
    { src: "/facebook.png" },
    { src: "/instagram.png" },
  ]);

  return (
    <div className="flex h-dvh items-center justify-center">
      <div className="flex h-[80%] w-[90%] flex-col items-center justify-center rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-10 backdrop-blur-md backdrop-filter md:h-[80%] md:w-[90%] md:flex-row xl:w-[70%]">
        <div className="flex h-full w-full flex-col items-start justify-center pl-4 md:w-1/2 md:pl-24">
          <div>
            <p className="my-5 w-48 border-x-4 border-pink-500 text-center text-xs font-bold text-black md:w-60 md:text-base">
              WELCOME TO MY WORLD
            </p>
            <p className="mb-5 text-xl font-bold text-black md:text-5xl">
              哈囉！
            </p>
            <p className="text-xl font-bold text-black md:text-5xl">
              {"我是 "}
              <span className="typewriter thick text-xl font-bold text-violet-600 md:text-5xl"></span>
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
        </div>
        <div className="flex h-full w-full items-start justify-center md:w-1/2 md:items-center md:justify-end">
          <Image
            alt=""
            src={"/me2.jpg"}
            width={400}
            height={400}
            className="w-56 rounded-[40px] shadow-xl lg:mr-24 xl:w-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
