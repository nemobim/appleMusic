import { SyntheticEvent } from "react";
import { ILinkProps } from "../../types/music";

const MusicLink = ({ href, text }: ILinkProps) => {
  const handleClick = (event: SyntheticEvent) => {
    event.preventDefault();
    window.open(href, "_blank", "noopener noreferrer");
  };

  return (
    <a
      className="flexCenter m-2 inline-block h-[3rem] w-[45%] justify-center rounded-lg bg-cyan-100 p-2 text-[1rem] font-medium text-sky-800 hover:ring-2 sm:w-[15rem] sm:text-[1.2rem]"
      href={href}
      onClick={handleClick}
    >
      {text}
    </a>
  );
};

export default MusicLink;
