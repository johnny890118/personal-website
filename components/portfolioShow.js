import Link from "next/link";
import Image from "next/image";

const PortfolioShow = ({ portfolioName, portfolioURL, portfolioImg }) => {
  return (
    <Link
      target="_blank"
      href={`${portfolioURL}`}
      className="mb-5 flex w-[90%] flex-col rounded-3xl p-12 shadow-2xl backdrop-blur-3xl md:w-[80%] md:flex-row"
    >
      <div>
        <Image alt="" src={portfolioImg} width={400} height={400} />
      </div>
      <div className="flex-grow text-center">{portfolioName}</div>
    </Link>
  );
};

export default PortfolioShow;
