import { atom } from "recoil";
import { IMusicChart, IMusicInfo } from "../types/music";

export const searching = atom({
  key: "searching",
  default: "",
});

export const filtering = atom({
  key: "filtering",
  default: "",
});

/*전체 데이터 */
export const musicInfo = atom<IMusicInfo[]>({
  key: "musicInfo",
  default: [],
});

/*차트 데이터 */
export const results = atom<IMusicChart[]>({
  key: "results",
  default: [],
});
