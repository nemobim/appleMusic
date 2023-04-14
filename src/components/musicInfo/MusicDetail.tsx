import { IInfocData } from "../../types/music";
import Info from "./Info";

const MusicDetail = ({ infoData }: IInfocData) => {
  return (
    <div className="my-[1rem]">
      {infoData.map(
        (info, i) =>
          i > 1 && <Info title={info.title} text={info.text} key={info.title} />
      )}
    </div>
  );
};

export default MusicDetail;
