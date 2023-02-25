import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = ({ param }) => {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  axios.defaults.baseURL = "https://api.unsplash.com/";

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const res = await axios(url);
      //   "https://api.unsplash.com/search/collections?page=1&query=cats&client_id=0LtUEVvRiLzwwhdfX38YtvYEa_71f12zkmUKxeQjx78"
      setResponse(res.data.results);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(param);
  }, [param]);

  return {
    response,
    isLoading,
    error,
    fetchData: (url) => fetchData(url),
  };
};

export default useAxios;
