import Loading from "../Loading";
import useFetchParam from "../../api/useFetchParam";
const ResultProductTypes = ({ filter, realFormId }) => {
  const { data, isPending, error } = useFetchParam(filter, realFormId);

  console.log(data);
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
            {data.content.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResultProductTypes;
