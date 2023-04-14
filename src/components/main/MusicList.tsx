import { useEffect, useState } from "react";
import MusicBox from "./MusicBox";
import { fetchData } from "../../utils/fetchData";
import { IMusic } from "../../types/music";

const MusicList = () => {
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    fetchData().then((res) => setMusicList(res.feed.entry));
  }, []);

  return (
    <div className="flexCenter h-[100%] w-[90%] rounded-xl bg-white p-2 shadow-lg sm:w-[40rem]">
      {musicList.map((music: IMusic, rank) => (
        <MusicBox
          music={music}
          rank={rank}
          key={music.id.attributes["im:id"]}
        />
      ))}
    </div>
  );
};

export default MusicList;
