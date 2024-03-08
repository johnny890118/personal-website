import Link from "next/link";
import Image from "next/image";

const UiComponentsShow = ({ portfolioName, portfolioURL, portfolioImg }) => {
  return (
    <Link
      target="_blank"
      href={`${portfolioURL}`}
      className="mx-2 mb-5 flex size-[21rem] flex-col justify-between rounded-3xl p-8 shadow-2xl backdrop-blur-3xl"
    >
      <div>
        <Image alt="" src={portfolioImg} width={500} height={500} />
      </div>
      <div className="text-center">{portfolioName}</div>
    </Link>
  );
};

export default UiComponentsShow;
