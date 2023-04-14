import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";
import Layout from "../components/elements/Layout";
import Title from "../components/elements/Title";
import MusicList from "../components/main/MusicList";
import SearchBar from "../components/main/SearchBar";

const Main = () => {
  const [musicList, setMusicList] = useState("");

  useEffect(() => {
    fetchData().then((res) => setMusicList(res.feed.entry));
  }, []);

  console.log(musicList);

  return (
    <Layout>
      <Title text="EL Music" />
      <SearchBar />
      <MusicList />
    </Layout>
  );
};

export default Main;
