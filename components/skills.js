const Skills = () => {
  return (
    <div className="h-[40rem] bg-[url('/bg2.jpg')] bg-cover bg-center md:h-dvh">
      <div className="flex h-full w-full flex-col items-center justify-center backdrop-blur-sm">
        <p className="mb-5 text-center">技能</p>
        <div className="w-[90%] rounded-3xl bg-white p-12 shadow-2xl md:w-1/2">
          <p>JavaScript</p>
          <p>React</p>
          <p>Next.JS</p>
          <p>Tailwind</p>
          <p>SCSS</p>
          <p>Git</p>
          <p>Python</p>
          <p>C++</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
