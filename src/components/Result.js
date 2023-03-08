import ResultGateway from "./ResultPages/ResultGateway";
import PaymentFormResult from "./ResultPages/PaymentFormResult";
import ResultProduct from "./ResultPages/ResultProductTypes";
import SoldProductResult from "./ResultPages/SoldProductResult";
const Result = ({ realFormId, filter, enterpriseNames, days }) => {
  return (
    <div className="bg-purple-500  h-[400px] rounded-lg text-white">
      {filter === "gatewayName" && (
        <ResultGateway
          filter={filter}
          realFormId={realFormId}
          enterpriseNames={enterpriseNames}
        />
      )}

      {filter === "soldProduct" && (
        <SoldProductResult
          filter={filter}
          realFormId={realFormId}
          enterpriseNames={enterpriseNames}
          days={days}
        />
      )}
      {filter === "paymentFormNumber" && (
        <PaymentFormResult
          filter={filter}
          realFormId={realFormId}
          enterpriseNames={enterpriseNames}
        />
      )}
      {filter === "findProductType" && (
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
