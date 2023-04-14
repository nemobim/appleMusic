import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import { IMusic } from "../types/music";

/**음원 이름 추출 */
export const useMusicTitle = () => {
  const [titles, setTitle] = useState([]);

  useEffect(() => {
    fetchData().then((res) => setTitle(res.feed.entry));
  }, []);

  const titleData = titles.map((music: IMusic) => music["im:name"].label);

  const setTitleData = () => {};

  return titleData;
};
