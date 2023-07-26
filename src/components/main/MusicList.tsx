import { useEffect, useState } from "react";
import { fetchData } from "../../utils/fetchData";
import { IMusic, IMusicInfo } from "../../types/music";
import { musicInfo } from "../../atom/atoms";
import { useRecoilState } from "recoil";
import { useMusic } from "../../hooks/useMusic";
import MusicDiv from "./MusicDiv";
import NoData from "./NoData";
import SkeletonList from "../skeletonUI/SkeletonList";

const MusicList = () => {
  const [musicData, setMusicData] = useRecoilState<IMusicInfo[]>(musicInfo);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData().then((res) => {
      const musicList = res.feed.entry;
      const datas = musicList?.map((music: IMusic) => ({
        id: music.id.attributes["im:id"],
        artistLink: music["im:artist"].attributes?.href,
        albumLink: music.link.attributes.href,
        image: music["im:image"][2].label,
        infoArray: [
          { title: "name", text: music["im:name"].label },
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
      setIsLoading(false);
    });
  }, [setMusicData]);

  const chartResult = useMusic();

  return (
    <div className="flexCenter h-[100%] w-[90%] rounded-xl bg-white p-2 shadow-lg sm:w-[40rem]">
      {isLoading && <SkeletonList />}
      {chartResult ? (
        <>
          {chartResult.map((data: IMusicInfo) => (
            <MusicDiv data={data} key={data.id} />
          ))}
        </>
      ) : (
        <>
          {musicData.map((data: IMusicInfo, rank) => (
            <MusicDiv data={data} rank={rank + 1} key={data.id} />
          ))}
        </>
      )}
      {chartResult?.length === 0 && <NoData />}
    </div>
  );
};

export default MusicList;
