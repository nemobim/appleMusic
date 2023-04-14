import { useEffect, useState } from "react";
import MusicBox from "./MusicBox";
import { fetchData } from "../../utils/fetchData";
import { IMusic, IMusicInfo } from "../../types/music";
import { musicInfo } from "../../atom/atoms";
import { useRecoilState } from "recoil";

const MusicList = () => {
  const [musicData, setMusicData] = useRecoilState<IMusicInfo[]>(musicInfo);

  useEffect(() => {
    fetchData().then((res) => {
      const musicList = res.feed.entry;
      const datas = musicList?.map((music: IMusic) => ({
        id: music.id.attributes["im:id"],
        artistLink: music["im:artist"].attributes?.href,
        albumLink: music.link.attributes.href,
        image: music["im:image"][2].label,
        infoArray: [
          { title: "title", text: music["im:name"].label },
          { title: "artist", text: music["im:artist"].label },
          { title: "category", text: music.category.attributes.label },
          { title: "Price", text: music["im:price"].label },
          {
            title: "contentType",
            text: music["im:contentType"].attributes.term,
          },
          {
            title: "releaseDate",
            text: music["im:releaseDate"].label.split("T")[0],
          },
        ],
      }));
      setMusicData(datas);
    });
  }, []);

  return (
    <div className="flexCenter h-[100%] w-[90%] rounded-xl bg-white p-2 shadow-lg sm:w-[40rem]">
      {musicData.map((data: IMusicInfo, rank) => (
        <MusicBox data={data} rank={rank} key={data.id} />
      ))}
    </div>
  );
};

export default MusicList;
