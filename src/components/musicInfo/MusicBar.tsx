import { useRecoilValue, useSetRecoilState } from "recoil";
import { filtering, searching } from "../../atom/atoms";

const MusicBar = () => {
  const setFilter = useSetRecoilState(filtering);
  const search = useRecoilValue(searching);

  const ChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
  };

  if (search) return null;

  return (
    <div className="mb-[1rem] flex h-[3rem] w-[90%] justify-end sm:w-[40rem]">
      <select
        className="w-[6rem] bg-slate-100 outline-none"
        onChange={ChangeHandler}
      >
        <option value="">Top 100</option>
        <option value="sortAsc">오름차순</option>
        <option value="sortDesc">내림차순</option>
      </select>
    </div>
  );
};

export default MusicBar;
