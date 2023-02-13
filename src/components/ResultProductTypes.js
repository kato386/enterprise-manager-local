import Loading from "./Loading";
import useFetch from "../useFetch";
const ResultProductTypes = ({ /* data, isPending, error, */ filter }) => {
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
          ResultProduct
          <ul>
            {data.productTypes.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResultProductTypes;
