import MusicBox from "./MusicBox";

const MusicList = () => {
  return (
    <div className="flexCenter h-[100vh] w-[90%] rounded-xl bg-white p-2 shadow-lg sm:w-[40rem]">
      <MusicBox />
      <MusicBox />
      <MusicBox />
      <MusicBox />
      <MusicBox />
      <MusicBox />
    </div>
  );
};

export default MusicList;
