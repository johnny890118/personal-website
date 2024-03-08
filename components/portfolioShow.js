import Link from "next/link";
import Image from "next/image";

const PortfolioShow = ({ portfolioName, portfolioURL, portfolioImg }) => {
  return (
    <Link
      target="_blank"
      href={`${portfolioURL}`}
      className="mb-5 flex w-[90%] flex-col rounded-3xl border border-gray-100 bg-gray-400 bg-opacity-10 p-12 backdrop-blur-md backdrop-filter md:w-[70%] md:flex-row"
    >
      <div>
        <Image alt="" src={portfolioImg} width={400} height={400} />
      </div>
      <div className="flex-grow text-center">{portfolioName}</div>
    </Link>
  );
};

export default PortfolioShow;
