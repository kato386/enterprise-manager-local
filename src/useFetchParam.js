import React from "react";
import { useEffect } from "react";

const useFetchParam = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    (formId, endPointUrl) => {
      setTimeout(() => {
        axios
          .get(endPointUrl, {
            params: {
              formId: { formId },
            },
          })
          .then((response) => {
            setData(response.data);
            setIsPending(false);
            setError(null);
            console.log(response.data);
          })
          .catch((error) => {
            setError(error.message);
            setIsPending(false);
          });
      }, 500);
    },
    [endPointUrl]
  );

  return { data, isPending, error };
};

export default useFetchParam;
