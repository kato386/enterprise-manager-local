import Loading from "../Loading";
import useFetchParam from "../../api/useFetchParam";

import Chart from "./Chart";
const SoldProductResult = ({ filter, days, realFormId }) => {
  const { data, isPending, error } = useFetchParam(filter, realFormId, days);

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
        <div className="w-full p-7">
          <Chart data={data.content} days={days} />
        </div>
      )}
    </div>
  );
};

export default SoldProductResult;
