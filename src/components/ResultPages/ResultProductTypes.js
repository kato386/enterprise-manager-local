import Loading from "../Loading";
import useFetchParam from "../../api/useFetchParam";
const ResultProductTypes = ({ filter, realFormId, enterpriseNames }) => {
  const { data, isPending, error } = useFetchParam(filter, realFormId);
  const head = ["EnterPrise", "ProductType", "FormID"];
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
        <div className="w-full  p-7">
          <table
            className="w-full border rounded
        "
          >
            <thead>
              <tr>
                {head.map((h, key) => (
                  <th className="text-left text-lg font-semibold" key={key}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {enterpriseNames.map((enterprise, key) => (
                <tr key={key}>
                  <td>{enterprise.value}</td>
                  <td>{data.content}</td>
                  <td>{realFormId ? realFormId : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResultProductTypes;
