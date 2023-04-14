import { useNavigate } from "react-router-dom";
import Layout from "../components/elements/Layout";
import MusicDetail from "../components/musicInfo/MusicDetail";
import MusicTitle from "../components/musicInfo/MusicTitle";
import backCon from "../image/backCon.png";
import MusicLink from "../components/musicInfo/MusicLink";

const MusicInfo = () => {
  const nav = useNavigate();

  return (
    <Layout>
      <div className="flexCenter w-[100%]">
        <div className="flexCenter mt-[4rem] h-[40rem] w-[90%] rounded-xl bg-white p-4 shadow-lg sm:w-[40rem]">
          <button className="w-[100%]" onClick={() => nav("/")}>
            <img alt="돌아가기" src={backCon} className="imgSize" />
          </button>
          <MusicTitle />
          <div className="row my-[1rem] flex h-[4rem] w-[100%] justify-center">
            <MusicLink href="dd" text="아티스트 정보" />
            <MusicLink href="dd" text="앨범 정보" />
          </div>
          <MusicDetail />
        </div>
      </div>
    </Layout>
  );
};

export default MusicInfo;
