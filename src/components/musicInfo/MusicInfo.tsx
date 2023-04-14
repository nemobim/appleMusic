import { IInfoProps } from "../../types/music";

const MusicInfo = ({ title, text }: IInfoProps) => {
  return (
    <li className="my-1 text-[0.8rem] font-bold sm:text-base">
      {title}:<span className="mx-2 font-light">{`${text}`}</span>
    </li>
  );
};

export default MusicInfo;
