import { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  const handleButtonSearch = () => {
    fetchData(
      `https://api.unsplash.com/search/collections?page=1&query=${searchValue}&client_id=0LtUEVvRiLzwwhdfX38YtvYEa_71f12zkmUKxeQjx78`
    );
    setSearchValue("");
    setSearchImage(searchValue);
  };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      fetchData(
        `https://api.unsplash.com/search/collections?page=1&query=${searchValue}&client_id=0LtUEVvRiLzwwhdfX38YtvYEa_71f12zkmUKxeQjx78`
      );
      setSearchValue("");
    }
  };

  return (
    <div className="flex">
      <input
        className="bg-gray-50 border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl "
        type="search"
        value={searchValue}
        placeholder="Search Images..."
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <button
        disabled={!searchValue}
        className="  bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2  focus:ring-blue-300 disabled:bg-gray-400 "
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
