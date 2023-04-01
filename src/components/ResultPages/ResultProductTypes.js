import Loading from "../Loading";
import useFetchParam from "../../api/useFetchParam";
import Error from "../Error";
const ResultProductTypes = ({ filter, realFormId, enterpriseNames }) => {
  const { data, isPending, error } = useFetchParam(filter, realFormId);
  const head = realFormId
    ? ["EnterPrise", "ProductType", "FormID"]
    : ["EnterPrise", "ProductType"];
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
        <div className="h-[385px] p-2 overflow-scroll overflow-x-hidden">
          <table
            className="w-full border rounded relative
        "
          >
            <thead>
              <tr>
                {head.map((h, key) => (
                  <th
                    className="text-red-200 p-2 text-left text-lg font-semibold sticky top-0"
                    key={key}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {realFormId ? (
                <tr>
                  <td className="p-2">{enterpriseNames.value}</td>
                  <td className="p-2">{data.content}</td>
                  <td className="p-2">{realFormId}</td>
                </tr>
              ) : (
                data.content.map((gateway, key) => (
                  <tr key={key}>
                    <td className="p-2">{enterpriseNames.value}</td>
                    <td className="p-2">{gateway}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ResultProductTypes;
