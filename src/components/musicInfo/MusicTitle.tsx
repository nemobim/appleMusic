import { IMusicInfo } from "../../types/music";
import cls from "../../utils/cls";

const MusicTitle = ({ infoData }: { infoData: IMusicInfo }) => {
  return (
    <div className="flexCenter">
      <img
        alt="음원이미지"
        src={infoData.image}
        className="my-2 h-[10rem] w-[10rem] rounded-sm drop-shadow-lg"
      />
      <h1
        className={cls(
          "my-1 text-center font-medium text-slate-800",
          infoData.infoArray[0].text.length > 10
            ? "text-[2rem]"
            : "musicText-size"
        )}
      >
        {infoData.infoArray[0].text}
      </h1>
      <h2 className="text-size text-center text-slate-500">
        {" "}
        {infoData.infoArray[1].text}
      </h2>
    </div>
  );
};

export default MusicTitle;
