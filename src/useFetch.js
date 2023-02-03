import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (endPointUrl) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    /* async function fetchNames() {
      try {
        const response = await fetch(endPointUrl);
        const result = await response.json();
        setData(result);
        setIsPending(false);
        setError(null);
      } catch (e) {
        setIsPending(false);
        setError(e.message);
      }
    }
  }, [endPointUrl]); */

    /* fetch(endPointUrl)
      .then((response) => {
        if (!response.ok) {
          throw Error("could not fetch the data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError(error.message);
      }); */

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
    }, 1000);
  }, [endPointUrl]);

  return { data, isPending, error };
};

export default useFetch;
