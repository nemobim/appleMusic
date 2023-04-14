const MusicBar = () => {
  return (
    <div className="mb-[1rem] flex h-[3rem] w-[90%] justify-end sm:w-[40rem]">
      <select className="w-[6rem] bg-slate-100 outline-none">
        <option>Top 100</option>
        <option>오름차순</option>
        <option>내림차순</option>
      </select>
    </div>
  );
};

export default MusicBar;
