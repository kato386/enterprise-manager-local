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
  filterInfo,
  filter,
}) => {
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/" + filter
  );

  return (
    <div className="bg-purple-500 h-[500px] rounded-lg text-white">
      {error && (
        <div className="">
          {error && (
            <h4 className="text-white text-4xl">
              {error + " accured."}
              <br />
            </h4>
          )}
        </div>
      )}
      {!error && isPending && (
        <div className="h-full">
          <Loading />
        </div>
      )}

      {gatewayClicked && !error && !isPending && <ResultGateway data={data} />}

      {productNumClicked && !error && !isPending && <Chart data={data} />}
      {paymentFormNumberClicked && !error && !isPending && (
        <Chart data={data} />
      )}
      {productTypesClicked && !error && !isPending && (
        <ResultProduct data={data} />
      )}
    </div>
  );
};

export default Result;
