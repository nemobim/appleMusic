import { useRecoilValue } from "recoil";
import { filtering, musicInfo, searching } from "../atom/atoms";
import { IMusicInfo } from "../types/music";
import { searchMusic, sortAsc, sortDesc } from "../utils/usage";

export const useMusic = () => {
  const filter = useRecoilValue(filtering);
  const search = useRecoilValue(searching);
  const musicData = useRecoilValue<IMusicInfo[]>(musicInfo);

  if (filter === "sortAsc") return sortAsc(musicData);
  if (filter === "sortDesc") return sortDesc(musicData);
  if (search) return searchMusic(musicData, search);
};
