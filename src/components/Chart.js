const Chart = ({ productNumData, paymentFormNumberData }) => {
  return (
    <div>
      Chart
      <h3>Product number is {productNumData[0].numberOfProductsSold}</h3>
      <h3>
        Payment form number is {paymentFormNumberData[0].numberOfPaymentForms}
      </h3>
    </div>
  );
};

export default Chart;
