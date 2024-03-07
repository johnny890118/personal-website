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
    <div className="h-dvh bg-[url('/bg1.jpg')] bg-cover bg-center">
      <div className="flex h-full w-full flex-col items-center justify-center backdrop-blur-sm md:flex-row">
        <div className="flex h-full w-full flex-col justify-center px-5 md:w-1/2 md:items-end">
          <div className="md:mr-10">
            {/* <h1 aria-label="Hi! I'm a developer">
              {"Hi! I'm a "}
              <span className="typewriter nocaret"></span>
            </h1> */}
            <p className="my-5 w-48 border-x-4 border-pink-500 text-center text-xs font-bold md:w-60 md:text-base">
              WELCOME TO MY WORLD
            </p>
            <p className="mb-5 text-xl font-bold md:text-5xl">哈囉！</p>
            <span className="text-xl font-bold md:text-5xl">我是 </span>
            <span className="text-xl font-bold text-violet-600 md:text-5xl">
              政軒
            </span>
            <p className="mt-5 text-xl font-bold md:text-5xl">
              前端 & 軟體工程師
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
        <div className="flex h-full w-full items-start justify-center md:w-1/2 md:items-center md:justify-start">
          <Image
            alt=""
            src={"/me.jpg"}
            width={400}
            height={400}
            className="w-56 rounded-[40px] shadow-xl md:w-80 lg:ml-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Title;
