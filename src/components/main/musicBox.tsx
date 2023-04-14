import { useNavigate } from "react-router-dom";
import { IMusicData } from "../../types/music";

const MusicBox = ({ data, rank }: IMusicData) => {
  const nav = useNavigate();

  return (
    <div
      onClick={() =>
        nav(`/musicinfo/${data.id}`, {
          state: { data },
        })
      }
      className="my-2 flex h-[4.5rem] w-[90%] items-center rounded-md bg-slate-50 p-1 shadow-md hover:bg-slate-100"
    >
      <span className="w-[4rem] text-center text-[1.5rem] font-bold text-slate-700">
        {rank + 1}
      </span>
      <img
        alt="음원이미지"
        src={data.image}
        className="imgSize mx-2 h-[3.2rem] w-[3.2rem]"
      />
      <div className="mx-2">
        <p className="text-over font-medium text-slate-800 sm:w-[24rem] ">
          {data.infoArray[0].text}
        </p>
        <p className="text-over text-[0.7rem] text-slate-500 sm:text-sm">
          {data.infoArray[1].text}
        </p>
      </div>
    </div>
  );
};

export default MusicBox;
