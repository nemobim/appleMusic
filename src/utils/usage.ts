import { IMusicInfo } from "../types/music";

// 오름차순 정렬
export const sortAsc = (chartArray: IMusicInfo[]) => {
  const sorted = [...chartArray].sort((a, b) =>
    a.infoArray[0].text.localeCompare(b.infoArray[0].text)
  );
  return sorted;
};

// 내림차순 정렬
export const sortDesc = (chartArray: IMusicInfo[]) => {
  const sorted = [...chartArray].sort((a, b) =>
    b.infoArray[0].text.localeCompare(a.infoArray[0].text)
  );
  return sorted;
};

// 검색
export const searchMusic = (chartArray: IMusicInfo[], search: string) => {
  const searched = [...chartArray].filter((chart) =>
    chart.infoArray[0].text.toLowerCase().includes(search.toLowerCase())
  );
  return searched;
};
