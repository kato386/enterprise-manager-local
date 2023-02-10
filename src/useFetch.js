import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endPointUrl) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get(endPointUrl)
        .then((response) => {
          setData(response.data);
          setIsPending(false);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setIsPending(false);
        });
    }, 500);
  }, [endPointUrl]);

  return { data, isPending, error };
};

export default useFetch;
