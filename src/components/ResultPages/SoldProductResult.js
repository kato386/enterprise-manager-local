import Loading from "../Loading";
import useFetchParam from "../../api/useFetchParam";
import Error from "../Error";
import Chart from "./Chart";
const SoldProductResult = ({ filter, days, realFormId }) => {
  const { data, isPending, error } = useFetchParam(filter, realFormId, days);

  return (
    <div>
      {error && (
        <div className="max-w-3xl mx-auto mt-4">
          <Error message={error} />
        </div>
      )}
      {!error && isPending && (
        <div className="h-full">
          <Loading />
        </div>
      )}
      {!error && !isPending && (
        <div className="w-full p-7 ">
          <Chart data={data.content} days={days} />
        </div>
      )}
    </div>
  );
};

export default SoldProductResult;
