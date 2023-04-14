export const sortAsc = (titles: string[]) => {
  const sorted = titles.sort();
  return sorted;
};

export const sortDesc = (titles: string[]) => {
  const sorted = titles.sort((a, b) => b.localeCompare(a));
  return sorted;
};
