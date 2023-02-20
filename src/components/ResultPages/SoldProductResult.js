import Loading from "../Loading";
import useFetch from "../../useFetch";

import Chart from "./Chart";
const SoldProductResult = ({
  /* data, isPending, error, */ filter,
  enterpriseNames,
  days,
}) => {
  //days parametre olarak gönderilecek.
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
        <div className="w-full p-7">
          <Chart data={data.numberOfProductsSold} days={days} />
        </div>
      )}
    </div>
  );
};

export default SoldProductResult;
