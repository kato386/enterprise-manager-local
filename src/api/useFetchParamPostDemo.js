import { useState, useEffect } from "react";
import axios from "axios";
const useFetchParamPostDemo = (endPointUrl, ...parameter) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData();
    setIsPending(true);
    setError(null);

    const formData = new FormData();

    formData.append("method[]", "gateway-list");

    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      params: {},
    };

    if (parameter[0]) {
      config.params["params[formID][]"] = parameter[0];
    }
    if (parameter[1]) {
      formData.append("accounts[0]", parameter[1].value);
    }

    axios
      .post(
        "https://api.jotform.com/enterprise-dashboard/payments",
        formData,
        config
      )
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
  }, [endPointUrl, ...parameter]);

  return { data, isPending, error };
};

export default useFetchParamPostDemo;
