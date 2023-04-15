import { IMusicChart, IMusicInfo } from "../types/music";

// /**검색 */
// export const searchResult = (titles: IMusicInfo[]) => {
//   const results = titles.filter((music) =>
//     music["im:name"].label.toLowerCase().includes(value.toLowerCase())
//   );
//   return results;
// };

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
export const searchMusic = (
  chartArray: IMusicChart[],
  searchKeyword: string
) => {
  const searched = chartArray.filter((chart) =>
    chart.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  return searched;
};
