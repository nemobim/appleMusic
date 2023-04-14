const MusicBox = () => {
  return (
    <div className="my-2 flex h-[4.5rem] w-[90%] items-center rounded-md bg-slate-50 p-1 shadow-md hover:bg-slate-100">
      <span className="mx-2 text-[1.5rem] font-extrabold text-slate-700">
        1
      </span>
      <img
        alt="음원이미지"
        src="https://image.bugsm.co.kr/album/images/1000/3806/380675.jpg"
        className="imgSize mx-2 h-[3.5rem] w-[3.5rem]"
      />
      <div className="flex w-[100%] justify-between">
        <div>
          <p className="text-sm font-medium text-slate-800 sm:text-base">
            핑크테이프
          </p>
          <p className="text-[0.7rem] text-slate-500 sm:text-sm">에프엑스</p>
        </div>
        <div className="flex items-end text-slate-400 sm:mr-[2rem]">
          <span className="text-[0.7rem] font-medium sm:text-base">
            일렉트로니카
          </span>
        </div>
      </div>
    </div>
  );
};

export default MusicBox;
