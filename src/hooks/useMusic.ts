import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { IMusic } from "../types/music";

export const useMusic = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetchData().then((res) => setDatas(res.feed.entry));
  }, []);

  const getMusicList = datas.map((data: IMusic) => ({
    artist: data["im:artist"].label,
    title: data["im:name"].label,
    image: data["im:image"][0].label,
  }));

  return getMusicList;
};
