const SearchBar = () => {
  return (
    <div className="mb-4 flex w-[90%] justify-center sm:w-[40rem]">
      <input
        type="text"
        placeholder="어떤 노래를 찾고계신가요?"
        className="w-[70%] rounded-md p-2 outline-none"
      />
      <button className="ml-3 w-[20%] rounded-md bg-blue-200 text-blue-700 hover:bg-blue-100 hover:ring-2 sm:w-[5rem]">
        검색
      </button>
    </div>
  );
};

export default SearchBar;
