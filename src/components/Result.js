import ResultGateway from "./ResultPages/ResultGateway";
import PaymentFormResult from "./ResultPages/PaymentFormResult";
import ResultProduct from "./ResultPages/ResultProductTypes";
import SoldProductResult from "./ResultPages/SoldProductResult";
const Result = ({ realFormId, filterInfo, filter, enterpriseNames }) => {
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
          realFormId={realFormId}
          enterpriseNames={enterpriseNames}
        />
      )}

      {filter === "productNumber" && (
        /* && !error && !isPending && */ <SoldProductResult
          /* data={data}
          isPending={isPending}
          error={error} */
          filter={filter}
          realFormId={realFormId}
          enterpriseNames={enterpriseNames}
        />
      )}
      {filter === "numberPayment" && (
        /* && !error && !isPending && */ <PaymentFormResult
          /* data={data}
          isPending={isPending}
          error={error} */
          filter={filter}
          realFormId={realFormId}
          enterpriseNames={enterpriseNames}
        />
      )}
      {filter === "productTypes" && (
        /* && !error && !isPending && */ <ResultProduct
          /* data={data}
          isPending={isPending}
          error={error} */
          filter={filter}
          realFormId={realFormId}
          enterpriseNames={enterpriseNames}
        />
      )}
    </div>
  );
};

export default Result;
