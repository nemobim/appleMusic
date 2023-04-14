import { IMuicDetailInfo } from "../../types/music";
import Info from "./Info";

const MusicDetail = ({ infoData }: IMuicDetailInfo) => {
  const infos = infoData.infoArray;

  return (
    <div className="my-[1rem]">
      {infos.map(
        (info, i) =>
          i > 1 && <Info title={info.title} text={info.text} key={info.title} />
      )}
    </div>
  );
};

export default MusicDetail;
