const Chart = ({
  productNumData,
  paymentFormNumberData,
  paymentFormNumberClicked,
  productNumClicked,
}) => {
  return (
    <div>
      Chart
      {productNumClicked && (
        <h3>Product number is {productNumData[0].numberOfProductsSold}</h3>
      )}
      {paymentFormNumberClicked && (
        <h3>
          Payment form number is {paymentFormNumberData[0].numberOfPaymentForms}
        </h3>
      )}
    </div>
  );
};

export default Chart;
