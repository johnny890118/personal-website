import Image from "next/image";
import React, { useState, useEffect } from "react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [navItems] = useState([
    { name: "Home", href: "#home", id: "home" },
    { name: "關於我", href: "#about", id: "about" },
    { name: "工作經歷", href: "#work", id: "work" },
    { name: "技能", href: "#skills", id: "skills" },
    { name: "作品集", href: "#portfolio", id: "portfolio" },
  ]);
  const [play, setPlay] = useState(false);

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveId(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      let activeId = "";
      const offset = 50; // 設置一個偏移量，當節點的上緣距離視窗頂部小於這個值時激活

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= 0) {
          activeId = section.id;
        }
      });

      setActiveId(activeId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  useEffect(() => {
    const audio = document.getElementById("background-music");
    if (play) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [play]);

  return (
    <>
      <div className="fixed z-50 w-screen px-5 backdrop-blur-sm md:px-0">
        <div className="flex h-[8vh] items-center justify-between md:justify-around">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("home");
              setPlay(!play);
            }}
          >
            <audio id="background-music" loop>
              <source src="/maple.mp3" type="audio/mp3" />
            </audio>
            <Image alt="" width={100} height={100} src={"/logo.png"} />
          </a>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-[5e5b78] hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setOpen(!open)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`navHover handwriting text-lg font-bold text-black hover:text-gray-600 ${activeId === item.id ? "before:height-[4px] before:absolute before:-bottom-1 before:w-full before:bg-[#002fa7]" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div
          className={
            open
              ? "pointer-events-auto visible absolute inset-x-0 top-0 origin-top-right scale-100 transform p-2 opacity-100 transition duration-200 ease-out md:hidden"
              : "pointer-events-none invisible absolute inset-x-0 top-0 origin-top-right scale-95 transform p-2 opacity-0 transition md:hidden"
          }
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-2xl ring-1 ring-black ring-opacity-5">
            <div className="px-5 pb-6 pt-5">
              <div className="flex items-center justify-between">
                <Image alt="" width={100} height={100} src={"/logo.png"} />
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {navItems.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(item.id);
                        setOpen(false);
                      }}
                    >
                      <span
                        className={`handwriting ml-3 text-lg font-bold text-gray-900 ${activeId === item.id ? "border-b-4 border-[#002fa7]" : ""}`}
                      >
                        {item.name}
                      </span>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
