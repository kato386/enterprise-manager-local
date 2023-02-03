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

  const { paymentFormNumberData, errorPaymentFormNumber, isPendingFormNumber } =
    paymentFormNumberClicked && useFetch(endPointUrl);

  const { productTypesData, productTypesError, isPending4 } =
    productTypesClicked && useFetch(endPointUrl); */

  const {
    data: gatewayData,
    isPending: isPendingGateway,
    error: errorGateway,
  } = useFetch(endPoint);

  const {
    data: productNumData,
    isPending: isPendingProductNum,
    error: errorProductNum,
  } = useFetch(endPoint);

  const {
    data: paymentFormNumberData,
    isPending: isPendingFormNumber,
    error: errorFormNumber,
  } = useFetch(endPoint);

  const {
    data: productTypesData,
    isPending: isPendingProductTypes,
    error: errorProductTypes,
  } = useFetch(endPoint);
  return (
    //todo:error page yap.
    <div>
      {(errorGateway ||
        errorProductNum ||
        errorFormNumber ||
        errorProductTypes) && (
        <div className="relative h-[650px] before:bg-gradient-to-r before:from-purple-600 before:to-purple-300 before:absolute before:inset-0 before:w-full before:h-full before:z-10">
          <div className="container flex z-20 absolute items-center h-full">
            {errorGateway && (
              <h4 className="text-white text-4xl">
                {errorGateway + " gateway error."}
                <br />
              </h4>
            )}
            {errorProductNum && (
              <h4 className="text-white text-4xl">
                {errorProductNum + " product number error."}
                <br />
              </h4>
            )}
            {errorFormNumber && (
              <h4 className="text-white text-4xl">
                {errorFormNumber + " form number error."}
                <br />
              </h4>
            )}
            {errorProductTypes && (
              <h4 className="text-white text-4xl">
                {errorProductTypes + " product type error."}
                <br />
              </h4>
            )}
          </div>
        </div>
      )}
      {!errorGateway &&
        isPendingGateway &&
        isPendingProductNum &&
        isPendingFormNumber &&
        isPendingProductTypes && <Loading />}

      {!errorGateway && !isPendingGateway && gatewayClicked && (
        <ResultGateway data={gatewayData} />
      )}

      {!errorProductNum &&
        !errorFormNumber &&
        !isPendingProductNum &&
        !isPendingFormNumber &&
        (productNumClicked || paymentFormNumberClicked) && (
          <Chart
            productNumClicked={productNumClicked}
            paymentFormNumberClicked={paymentFormNumberClicked}
            productNumData={productNumData}
            paymentFormNumberData={paymentFormNumberData}
          />
        )}
      {!errorProductTypes && !isPendingProductTypes && productTypesClicked && (
        <ResultProduct data={productTypesData} />
      )}
    </div>
  );
};

export default Result;
