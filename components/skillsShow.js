const SkillsShow = ({ skillName, skillPercent }) => {
  return (
    <>
      <div className="m-4 flex h-52 w-52 flex-col items-center justify-center rounded-3xl font-bold shadow-2xl backdrop-blur-3xl">
        <div
          className="radial-progress text-violet-600"
          style={{ "--value": skillPercent }}
          role="progressbar"
        >
          {`${skillPercent}%`}
        </div>
        <div className="m-5">{skillName}</div>
      </div>
    </>
  );
};

export default SkillsShow;
