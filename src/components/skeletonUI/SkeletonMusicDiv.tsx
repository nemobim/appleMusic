import Skeleton from "react-loading-skeleton";

const SkeletonMusicDiv = () => {
  return (
    <div className="my-2 flex h-[4.5rem] w-[90%] items-center rounded-md bg-slate-50 p-1 shadow-md hover:bg-slate-100">
      <Skeleton width="3.2rem" height="3.2rem" className="ml-[4.5rem]" />
      <div className="mx-2">
        <Skeleton width="15rem" height="1.2rem" />
        <Skeleton width="6rem" />
      </div>
    </div>
  );
};

export default SkeletonMusicDiv;
