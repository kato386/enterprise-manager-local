import Loading from "./Loading";
import useFetch from "../useFetch";
const Chart = ({ /* data, isPending, error, */ filter }) => {
  const { data, isPending, error } = useFetch(
    "http://localhost:8000/" + filter
  );
  return (
    <div>
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
          Chart
          <h3>Product number is {data.numberOfProductsSold}</h3>
        </div>
      )}
    </div>
  );
};

export default Chart;
