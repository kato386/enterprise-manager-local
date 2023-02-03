import ResultGateway from "./ResultGateway";
import Chart from "./Chart";
import ResultProduct from "./ResultProductTypes";
import useFetch from "../useFetch";
import Loading from "./Loading";

const Result = ({
  formId,
  gatewayClicked,
  productNumClicked,
  paymentFormNumberClicked,
  productTypesClicked,
}) => {
  const endPoint = "http://localhost:8000/datas";

  //form id get request atılırken kullanılabilir.
  /* const { productNumData, error, isPending } =
    productNumClicked && useFetch(endPointUrl);

  const { gatewayData, errorGateway, isPending2 } =
    gatewayClicked && useFetch(endPointUrl);

  const { paymentFormNumberData, errorPaymentFormNumber, isPending3 } =
    paymentFormNumberClicked && useFetch(endPointUrl);

  const { productTypesData, productTypesError, isPending4 } =
    productTypesClicked && useFetch(endPointUrl); */

  const { data: gatewayData, isPending, error } = useFetch(endPoint);

  const {
    data: productNumData,
    isPending: isPending1,
    error: error1,
  } = useFetch(endPoint);

  const {
    data: paymentFormNumberData,
    isPending: isPending3,
    error: error2,
  } = useFetch(endPoint);

  const {
    data: productTypesData,
    isPending: isPending4,
    error: error4,
  } = useFetch(endPoint);
  return (
    <div>
      {error /* ||
        errorGateway ||
            errorPaymentFormNumber ||
        productTypesError) */ && (
        <div className="relative h-[650px] before:bg-gradient-to-r before:from-purple-600 before:to-purple-300 before:absolute before:inset-0 before:w-full before:h-full before:z-10">
          <div className="container flex z-20 absolute items-center h-full justify-center">
            <h4 className="text-white text-4xl">
              {error} <br />
              {/* {errorGateway} <br />
              {errorPaymentFormNumber} <br />
              {productTypesError} <br /> */}
            </h4>
          </div>
        </div>
      )}
      {!error && isPending && isPending1 && isPending3 && isPending4 && (
        <Loading />
      )}
      {!error && !isPending && gatewayClicked && (
        <ResultGateway data={gatewayData} />
      )}

      {!error1 &&
        !isPending1 &&
        !isPending3 &&
        (productNumClicked || paymentFormNumberClicked) && (
          <Chart
            productNumClicked={productNumClicked}
            paymentFormNumberClicked={paymentFormNumberClicked}
            productNumData={productNumData}
            paymentFormNumberData={paymentFormNumberData}
          />
        )}
      {!error4 && !isPending4 && productTypesClicked && (
        <ResultProduct data={productTypesData} />
      )}
    </div>
  );
};

export default Result;
