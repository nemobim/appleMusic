import { useRecoilState } from "recoil";
import { searching } from "../../atom/atoms";

const SearchBar = () => {
  const [search, setSerch] = useRecoilState(searching);
  const inputHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSerch(event.target.value);
  };

  return (
    <div className="mb-4 flex w-[90%] justify-center sm:w-[40rem]">
      <input
        value={search}
        type="text"
        onChange={inputHandle}
        placeholder="어떤 노래를 찾고계신가요?"
        className="w-[60%] rounded-l-md p-2 outline-none"
      />
      <button
        className="w-[2rem] rounded-r-md bg-white p-2"
        onClick={() => setSerch("")}
      >
        X
      </button>
      <button className="ml-3 w-[20%] rounded-md bg-blue-200 text-blue-700 hover:bg-blue-100 hover:ring-2 sm:w-[5rem]">
        검색
      </button>
    </div>
  );
};

export default SearchBar;
