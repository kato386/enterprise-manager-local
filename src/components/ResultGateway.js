import useFetch from "../useFetch";

const ResultGateway = ({ data }) => {
  return (
    <div>
      <h3>Gateway is : {data[0].gateway}</h3>
    </div>
  );
};

export default ResultGateway;
