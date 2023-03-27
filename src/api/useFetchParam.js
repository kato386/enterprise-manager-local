import { api } from "./api";
import { useState, useEffect } from "react";

const useFetch = (endPointUrl, ...parameter) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData();
    setIsPending(true);
    setError(null);

    api()
      .get(endPointUrl, {
        params: {
          ...(parameter[0] ? { form_id: parameter[0] } : {}),
          ...(parameter[1] ? { x: parameter[1] } : {}),
        },
      })
      .then((response) => {
        if (response.data.responseCode == 400) {
          setError("Form id not found.");
        } else {
          setData(response.data);
          setIsPending(false);
          setError(null);
          console.log(response.data.content);
        }
      })
      .catch((error) => {
        setError(error.message);
        setIsPending(false);
      });
  }, [endPointUrl, ...parameter]);

  return { data, isPending, error };
};

export default useFetch;
