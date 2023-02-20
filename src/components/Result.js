import ResultGateway from "./ResultPages/ResultGateway";
import PaymentFormResult from "./ResultPages/PaymentFormResult";
import ResultProduct from "./ResultPages/ResultProductTypes";
import SoldProductResult from "./ResultPages/SoldProductResult";
const Result = ({ realFormId, filterInfo, filter, enterpriseNames, days }) => {
  return (
    <div className="bg-purple-500 h-[500px] rounded-lg text-white">
      {filter === "gatewayName" && (
        <ResultGateway
          filter={filter}
          realFormId={realFormId}
          enterpriseNames={enterpriseNames}
        />
      )}

      {filter === "productNumber" && (
        <SoldProductResult
          filter={filter}
          realFormId={realFormId}
          enterpriseNames={enterpriseNames}
          days={days}
        />
      )}
      {filter === "numberPayment" && (
        <PaymentFormResult
          filter={filter}
          realFormId={realFormId}
          enterpriseNames={enterpriseNames}
        />
      )}
      {filter === "productTypes" && (
        <ResultProduct
          filter={filter}
          realFormId={realFormId}
          enterpriseNames={enterpriseNames}
        />
      )}
    </div>
  );
};

export default Result;
