import { useRecoilValue } from "recoil";
import { filtering, musicInfo } from "../atom/atoms";
import { IMusicInfo } from "../types/music";
import { sortAsc, sortDesc } from "../utils/usage";

export const useMusic = () => {
  const filter = useRecoilValue(filtering);
  const musicData = useRecoilValue<IMusicInfo[]>(musicInfo);

  if (filter === "sortAsc") return sortAsc(musicData);
  if (filter === "sortDesc") return sortDesc(musicData);
};
