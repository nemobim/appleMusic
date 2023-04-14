/**데이터 통신 */
export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://itunes.apple.com/us/rss/topalbums/limit=100/json"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
