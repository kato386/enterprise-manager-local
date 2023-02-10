import axios from "axios";
import { useState, useEffect } from "react";

const useFetchMultiple = (urls) => {
  const [gatewayNameData1, setgatewayNameData] = useState();
  const [productNumData1, setProductNumberData] = useState();
  const [formNumberData1, setFormNumberData] = useState();
  const [productTypesData1, setproductTypesData] = useState();

  const [isPending1, setIsPending] = useState(true);
  const [error1, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      axios
        .all(urls.map((endpoint) => axios.get(endpoint)))
        .then(
          axios.spread(
            (gatewayName, productNumber, numberPayment, productTypes) => {
              setIsPending(false);
              setgatewayNameData(gatewayName.data);
              setProductNumberData(productNumber.data);
              setFormNumberData(numberPayment.data);
              setproductTypesData(productTypes.data);
            }
          )
        )
        .catch((err) => setError(err));
    }, 500);
  }, [urls]);

  return {
    gatewayNameData1,
    productNumData1,
    formNumberData1,
    productTypesData1,
    isPending1,
    error1,
  };
};

export default useFetchMultiple;
