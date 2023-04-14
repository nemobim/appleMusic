import { useNavigate } from "react-router-dom";
import { IMusicData } from "../../types/music";

const MusicBox = ({ music, rank }: IMusicData) => {
  const nav = useNavigate();

  return (
    <div
      onClick={() => nav(`/musicinfo/${music.id.attributes["im:id"]}`)}
      className="my-2 flex h-[4.5rem] w-[90%] items-center rounded-md bg-slate-50 p-1 shadow-md hover:bg-slate-100"
    >
      <span className="w-[4rem] text-center text-[1.5rem] font-bold text-slate-700">
        {rank + 1}
      </span>
      <img
        alt="음원이미지"
        src={music?.["im:image"][0].label}
        className="imgSize mx-2 h-[3.2rem] w-[3.2rem]"
      />
      <div className="mx-2">
        <p className="text-over font-medium text-slate-800 sm:w-[24rem] ">
          {music?.["im:name"].label}
        </p>
        <p className="text-over text-[0.7rem] text-slate-500 sm:text-sm">
          {music?.["im:artist"].label}
        </p>
      </div>
    </div>
  );
};

export default MusicBox;
