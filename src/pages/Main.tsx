import { useState } from "react";
import Layout from "../components/elements/Layout";
import Title from "../components/elements/Title";
import MusicList from "../components/main/MusicList";
import SearchBar from "../components/main/SearchBar";
import MusicBar from "../components/musicInfo/MusicBar";

const Main = () => {
  return (
    <Layout>
      <Title text="EL Music" />
      <SearchBar />
      <MusicBar />
      <MusicList />
    </Layout>
  );
};

export default Main;
