const ResultProduct = ({ data }) => {
  return (
    <div>
      ResultProduct
      <ul>
        {data[0].productTypes.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResultProduct;
