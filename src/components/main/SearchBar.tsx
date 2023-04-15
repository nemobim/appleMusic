import { useSetRecoilState } from "recoil";
import { searching } from "../../atom/atoms";
import { useState } from "react";

const SearchBar = () => {
  const [value, setValue] = useState("");
  const setSerch = useSetRecoilState(searching);
  const inputHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSerch(value);
  };

  return (
    <form
      className="mb-4 flex w-[90%] justify-center sm:w-[40rem]"
      onSubmit={submitHandler}
    >
      <input
        value={value}
        type="text"
        onChange={inputHandle}
        placeholder="어떤 노래를 찾고계신가요?"
        className="w-[60%] rounded-l-md p-2 outline-none"
      />
      <button
        className="w-[2rem] rounded-r-md bg-white p-2"
        onClick={() => setValue("")}
      >
        X
      </button>
      <button className="ml-3 w-[20%] rounded-md bg-blue-200 text-blue-700 hover:bg-blue-100 hover:ring-2 sm:w-[5rem]">
        검색
      </button>
    </form>
  );
};

export default SearchBar;
