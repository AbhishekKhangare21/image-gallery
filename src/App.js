import { createContext, useState } from "react";
import Images from "./components/Images";
import Jumbotron from "./components/Jumbotron";
import SearchField from "./components/SearchField";
import useAxios from "./hooks/useAxios";

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/collections?page=1&query=cats&client_id=${process.env.KEY}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

  return (
    <ImageContext.Provider value={value}>
      <Jumbotron>
        <SearchField />
      </Jumbotron>
      <Images />
    </ImageContext.Provider>
  );
}

export default App;
