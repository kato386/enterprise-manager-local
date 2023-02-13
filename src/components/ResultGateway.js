import Loading from "./Loading";
import useFetch from "../useFetch";

const ResultGateway = ({ /* data, error,isPending, */ filter }) => {
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/" + filter
  );
  return (
    <div className="">
      {error && (
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
      )}

      {!error && !isPending && (
        <div>
          <h3>Gateway is : {data.gatewayname}</h3>
        </div>
      )}
    </div>
  );
};

export default ResultGateway;
