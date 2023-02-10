const Chart = ({ data }) => {
  return (
    <div>
      Chart
      <h3>Product number is {data[0].numberOfProductsSold}</h3>
    </div>
  );
};

export default Chart;
