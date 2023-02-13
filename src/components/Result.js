import ResultGateway from "./ResultGateway";
import Chart from "./Chart";
import ResultProduct from "./ResultProductTypes";
const Result = ({ formId, filterInfo, filter }) => {
  return (
    <div className="bg-purple-500 h-[500px] rounded-lg text-white">
      {/* {error && (
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
      )} */}

      {filter === "gatewayName" && (
        /* && !error && !isPending && */ <ResultGateway
          /* data={data}
          isPending={isPending}
          error={error} */
          filter={filter}
        />
      )}

      {filter === "productNumber" && (
        /* && !error && !isPending && */ <Chart
          /* data={data}
          isPending={isPending}
          error={error} */
          filter={filter}
        />
      )}
      {filter === "numberPayment" && (
        /* && !error && !isPending && */ <Chart
          /* data={data}
          isPending={isPending}
          error={error} */
          filter={filter}
        />
      )}
      {filter === "productTypes" && (
        /* && !error && !isPending && */ <ResultProduct
          /* data={data}
          isPending={isPending}
          error={error} */
          filter={filter}
        />
      )}
    </div>
  );
};

export default Result;
