import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endPointUrl) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData();
    setIsPending(true);
    setError(null);

    axios
      .get(endPointUrl)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, [endPointUrl]);

  return { data, isPending, error };
};

export default useFetch;
