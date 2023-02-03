import ResultGateway from "./ResultGateway";
import Chart from "./Chart";
import ResultProduct from "./ResultProductTypes";
import useFetch from "../useFetch";

const Result = ({
  formId,
  gatewayClicked,
  productNumClicked,
  paymentFormNumberClicked,
  productTypesClicked,
}) => {
  const endPointUrl = "http://localhost:8000/datas";

  //form id get request atılırken kullanılabilir.
  const { productNumData, error, isPending } =
    productNumClicked && useFetch(endPointUrl);

  const { gatewayData, errorGateway, isPending2 } =
    gatewayClicked && useFetch(endPointUrl);

  const { paymentFormNumberData, errorPaymentFormNumber, isPending3 } =
    paymentFormNumberClicked && useFetch(endPointUrl);

  const { productTypesData, productTypesError, isPending4 } =
    productTypesClicked && useFetch(endPointUrl);

  return (
    <div>
      {(error ||
        errorGateway ||
        errorPaymentFormNumber ||
        productTypesError) && (
        <div className="relative h-[500px] before:bg-gradient-to-r before:from-purple-600 before:to-purple-300 before:absolute before:inset-0 before:w-full before:h-full before:z-10">
          <div className="container flex z-20 absolute items-center h-full justify-center">
            <h4 className="text-white text-4xl">
              {error} <br />
              {errorGateway} <br />
              {errorPaymentFormNumber} <br />
              {productTypesError} <br />
            </h4>
          </div>
        </div>
      )}
      {!error && isPending && <Loading />}
      {!error && !isPending && <Register names={names} />}
      {gatewayClicked && (
        <ResultGateway data={gatewayData} gatewayClicked={gatewayClicked} />
      )}
      {/* {(productNumClicked || paymentFormNumberClicked) && (
        <Chart
          productNumClicked={productNumClicked}
          paymentFormNumberClicked={paymentFormNumberClicked}
          productNumData={productNumData}
          paymentFormNumberData={paymentFormNumberData}
        />
      )}
      {productTypesClicked && (
        <ResultProduct
          productTypesClicked={productTypesClicked}
          data={productTypesData}
        />
      )} */}
    </div>
  );
};

export default Result;
