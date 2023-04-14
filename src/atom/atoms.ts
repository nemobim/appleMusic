import { atom } from "recoil";
import { IMusicInfo } from "../types/music";

export const searching = atom({
  key: "searching",
  default: "",
});

export const filtering = atom({
  key: "filtering",
  default: "TOP 100",
});

export const musicInfo = atom<IMusicInfo[]>({
  key: "musicInfo",
  default: [],
});
