const ResultGateway = ({ data }) => {
  return (
    <div className="">
      <h3>Gateway is : {data[0].gatewayname}</h3>
    </div>
  );
};

export default ResultGateway;
